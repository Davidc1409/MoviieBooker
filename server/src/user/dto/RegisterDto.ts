import { IsEmail, IsNotEmpty, IsString, IsNumber, IsInt, Matches, MinLength } from 'class-validator';

export class RegisterDto {

    @IsString()
    @MinLength(3, { message: 'firstname must have atleast 3 characters.' })
    firstname: string;

    @IsString()
    @MinLength(3, { message: 'lastname must have atleast 3 characters.' })
    lastname: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;

    @IsInt()
    age: number;

}