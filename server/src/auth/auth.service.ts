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
      firstname : user.firstname,
      lastname : user.lastname,
      email : user.email,
      age : user.age
    };
    const token = this.JwtService.signAsync(payload);
    return token;
  }
}
