import { User } from 'src/user/entity/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, Unique, JoinColumn, OneToOne, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp'})
  startTime: Date;

  @Column({ type: 'timestamp'})
  endTime: Date;

  @Column({ type: 'int'})
  movieId: number;

  @ManyToOne(() => User, (user) => user.reservations)
  @JoinColumn()
  user: User
}
