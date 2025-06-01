import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';


@Entity({ name: 'notifications' })
export class Notifications {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  title: string;

  @Column()
  content: string;

  @ManyToOne(() => User, (user) => user.id)
  User: User;
}