import { Controller, Get, Post, Put, Patch, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterDto } from './dto/RegisterDto';
import { LoginDto } from './dto/LoginDto';
import { User } from './entity/user.entity';
import { ApiTags, ApiBody } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @ApiBody({
        type: RegisterDto,
        examples: {
            user1: {
                summary: "Exemple de données utilisateur",
                value: {
                    lastname: 'john',
                    firstname: 'doe',
                    email: 'john_doe@gmail.com',
                    password: 'securepassword123',
                    age: 25
                },
            },
        }
    })
    @Post("/auth/register")
    register(@Body() RegisterDto: RegisterDto): Promise<User> {
        return this.userService.register(RegisterDto);
    }

    @ApiBody({
        type: LoginDto,
        examples: {
            user1: {
                summary: "Exemple d'identifiant",
                value: {
                    email: 'john_doe@gmail.com',
                    password: 'securepassword123',
                },
            },
        }
    })
    @HttpCode(HttpStatus.OK)
    @Post("/auth/login")
    login(@Body() loginDto: LoginDto): Promise<string> {
        return this.userService.login(loginDto);
    }
}