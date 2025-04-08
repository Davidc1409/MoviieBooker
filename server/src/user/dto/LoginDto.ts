import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class LoginDto {

    @IsEmail()
    @ApiProperty({
        type: String,
        description: 'This is a required property',
    })
    email: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        type: String,
        description: 'This is a required property',
    })
    password: string;

}