import { Controller,Get, Post, Put, Patch, Delete, Body, HttpCode, HttpStatus,Param, Query, UseGuards,Request } from '@nestjs/common';
import {ReservationService} from './reservation.service'
import { AuthGuard } from '../auth/jwt-auth.guard';
import { ApiTags, ApiBody,ApiQuery, ApiParam } from '@nestjs/swagger';
import {CreateReservationDto} from './dto/CreateReservationDto'

@ApiTags('Reservations')
@Controller('reservation')
export class ReservationController {
        constructor(private reservationService: ReservationService) {}
    
    @UseGuards(AuthGuard)
    @Get('/reservations')
    getReservations(@Request() req){
        return this.reservationService.getReservationsByUserId(req.user);
    }

    @ApiBody({
        type: CreateReservationDto,
        examples: {
            user1: {
                summary: "Exemple de création d'une réservation",
                value: {
                    movieId: '1423654',
                    startTime: '2025-04-10 19:49:50.481Z',
                },
            },
        }
    })
    @UseGuards(AuthGuard)
    @Post('/reservations')
    createReservation(@Request() req,@Body() data){
        return this.reservationService.createReservation(req.user, data.movieId, data.startTime);
    } 

    @ApiParam({
        name: "id",
        type: String,
        description: "A required parameter for the id of the record to delete",
        required: true,
    })
    @UseGuards(AuthGuard)
    @Delete('/reservations/:id')
    deleteReservation(@Request() req,@Param('id') id){
       return this.reservationService.deleteReservation(id, req.user);
    }

}
