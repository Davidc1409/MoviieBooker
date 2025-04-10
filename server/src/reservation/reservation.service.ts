import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Reservation } from './entity/reservation.entity';
import { User } from 'src/user/entity/user.entity';


@Injectable()
export class ReservationService {
    constructor(
            @InjectRepository(Reservation)
            private reservationRepository: Repository<Reservation>
        ) {}

    async getReservationsByUserId (user : User): Promise<Reservation[]>{
        try{
            const validUser = new User();
            validUser.id = user.id;
            return this.reservationRepository.findBy({user : validUser});
        }
        catch(e){
            return Promise.reject(e);
        }
    }

    async createReservation(user : User, movieId : number, startTime : Date) : Promise<Reservation>{
        try {
            const currentReservations = await this.getReservationsByUserId(user);
            const currentReservationStartTime = new Date(startTime).getTime();
            if(Number.isNaN(currentReservationStartTime)){
                throw new BadRequestException("Invalid Date");
            }
            console.log(currentReservationStartTime);
            const currentReservationEndTime = currentReservationStartTime + 7200000;
            currentReservations.map((reservation)=>{
                if( currentReservationStartTime >= reservation.startTime.getTime() && currentReservationStartTime <= reservation.endTime.getTime()){
                    throw new BadRequestException ("Réservation impossible, créneau en conflit");
                }
            })
            const reservation = new Reservation();
            reservation.startTime = startTime;
            reservation.endTime = new Date(currentReservationEndTime);
            reservation.movieId = movieId;
            reservation.user = user;
            return this.reservationRepository.save(reservation);
        }
        catch(e){
            return Promise.reject(e);
        }
    }

    async deleteReservation(id : number): Promise<DeleteResult>{
        try{
            return this.reservationRepository.delete(id);
        }   
        catch(e){
            return Promise.reject(e);
        }
    }

}
