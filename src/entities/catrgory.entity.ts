import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn, UpdateResult } from 'typeorm';
import { User } from './user.entity';
import { create } from 'axios';

@Entity({ name: 'catrgory' })
export class Catrgory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  type: string;

  @ManyToOne(() => User, (user) => user.id)
  User: User;

  @CreateDateColumn()
  CreatedAt: Date;

  @UpdateDateColumn()
  UpdateAt: Date;
}