import { Controller,Get, Post, Put, Patch, Delete, Body, HttpCode, HttpStatus,Param, Query, UseGuards,Request } from '@nestjs/common';
import {ReservationService} from './reservation.service'
import { AuthGuard } from '../auth/jwt-auth.guard';

@Controller('reservation')
export class ReservationController {
        constructor(private reservationService: ReservationService) {}
    
    @UseGuards(AuthGuard)
    @Get('/reservations')
    getReservations(@Request() req){
        return this.reservationService.getReservationsByUserId(req.user);
    }

    @UseGuards(AuthGuard)
    @Post('/reservations')
    createReservation(@Request() req,@Body() data){
        return this.reservationService.createReservation(req.user, data.movieId, data.startTime);
    } 

    @UseGuards(AuthGuard)
    @Delete('/reservations/:id')
    deleteReservation(@Param('id') id){
       return this.reservationService.deleteReservation(id);
    }

}
