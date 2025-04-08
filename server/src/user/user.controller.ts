import { Controller, Get, Post, Put, Patch, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterDto } from './dto/RegisterDto';
import { LoginDto } from './dto/LoginDto';
import { User } from './entity/user.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post("/auth/register")
    register(@Body() RegisterDto: RegisterDto): Promise<User> {
        return this.userService.register(RegisterDto);
    }

    @HttpCode(HttpStatus.OK)
    @Post("/auth/login")
    login(@Body() loginDto: LoginDto): Promise<string> {
        return this.userService.login(loginDto);
    }

}
