import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MoviesModule } from './movies/movies.module';
import { ReservationModule } from './reservation/reservation.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { User } from './user/entity/user.entity';

@Module({
  imports: [UserModule,ConfigModule.forRoot(), AuthModule, MoviesModule, ReservationModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Azerty123',
      database: 'MoviieBooker',
      // ssl: {
      //   rejectUnauthorized: false, // Required for Render's SSL setup
      // },
      entities: [User], // Path to entities
      // migrations: ["src/migration/**/*.ts"], // Path to migrations
      // subscribers: ["src/subscriber/**/*.ts"], // Path to subscriber
      synchronize: true,
      logging: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
