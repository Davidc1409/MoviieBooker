import { Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/RegisterDto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import {AuthService} from '../auth/auth.service';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/LoginDto';
import { Reservation } from 'src/reservation/entity/reservation.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        private authService: AuthService
    ) {}

    async register(RegisterDto : RegisterDto):Promise<User>{
        try{
            const user: User = new User();
            user.firstname = RegisterDto.firstname;
            user.lastname = RegisterDto.lastname;
            user.email = RegisterDto.email;
            user.age = RegisterDto.age;
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(RegisterDto.password,salt);
            user.password = hashedPassword;
            const userInfo = await this.userRepository.save(user);
            userInfo.password = "";
            return userInfo
        }
        catch(e){
            return Promise.reject(e);
        }
    }
    
    async login(loginDto : LoginDto):Promise<string>{
        try{
            const user = await this.findByEmail(loginDto.email);
            if(!user){
                return "No user found with this email";
            }
            return this.authService.getToken(user,loginDto.password);
        }
        catch(e){
            return Promise.reject(e);
        }

    }

    findByEmail(email : string):Promise<User| null>  {
        return this.userRepository.findOneBy({email})
    }

}
