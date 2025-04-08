import { IsEmail, IsNotEmpty, IsString, IsNumber, IsInt, Matches, MinLength } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';


export class RegisterDto {

    @IsString()
    @MinLength(3, { message: 'firstname must have atleast 3 characters.' })
    @ApiProperty({
        type: String,
        description: 'This is a required property',
    })
    firstname: string;

    @IsString()
    @MinLength(3, { message: 'lastname must have atleast 3 characters.' })
    @ApiProperty({
        type: String,
        description: 'This is a required property',
    })
    lastname: string;

    @IsNotEmpty()
    @IsEmail()
    @ApiProperty({
        type: String,
        description: 'This is a required property',
    })
    email: string;

    @IsNotEmpty()
    @ApiProperty({
        type: String,
        description: 'This is a required property',
    })
    password: string;

    @IsInt()
    @ApiProperty({
        type: Number,
        description: 'This is a required property',
    })
    age: number;

}