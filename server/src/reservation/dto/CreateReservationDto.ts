import { IsEmail, IsNotEmpty, IsString, IsNumber, IsInt, Matches, MinLength, IsDate } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';


export class CreateReservationDto {

    @IsDate()
    @IsNotEmpty()
    @ApiProperty({
        type: Date,
        description: 'This is a required property',
    })
    startTime: Date;

    @IsInt()
    @IsNotEmpty()
    @ApiProperty({
        type: Number,
        description: 'This is a required property',
    })
    movieId: number;

}