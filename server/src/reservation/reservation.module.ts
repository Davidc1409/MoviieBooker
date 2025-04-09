import { Module } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { ReservationController } from './reservation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { Reservation } from './entity/reservation.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Reservation]),AuthModule],
  providers: [ReservationService],
  controllers: [ReservationController],
  exports: [TypeOrmModule],
})
export class ReservationModule {}
