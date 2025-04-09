import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entity/user.entity';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
    constructor(private JwtService :JwtService) {}

  async getToken(user: User, password: string): Promise<string> {
    const isPasswordCorrect = bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      throw new UnauthorizedException();
    }
    const payload = {
      id: user.id,
      firstname : user.firstname,
      lastname : user.lastname,
      email : user.email,
      age : user.age
    };
    const token = this.JwtService.signAsync(payload);
    return token;
  }

  async getUserFromToken(token: string){
    try {
      const payload = await this.JwtService.verifyAsync(
        token,
        {
          secret: process.env.SECRET
        }
      );
      // console.log(payload);
      return payload;
    } catch(error) {
      throw new Error(error);
    }
  }
}
