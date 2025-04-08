import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
@Unique(["email"])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 90 })
  firstname: string;

  @Column({ type: 'varchar', length: 90 })
  lastname: string;

  @Column({ type: 'varchar', length: 160 })
  password: string;

  @Column({ type: 'varchar', length: 100 })
  email: string;

  @Column({ type: 'int'})
  age: number;
}
