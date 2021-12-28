import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Location } from "./Location";

export enum Type {
  student = "student",
  teacher = "teacher",
  admin = "admin"
}
@Entity("system_user")
export class User {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  lastname: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  cpf: string;

  @Column()
  birth_date: Date;

  @Column()
  address: string;

  @Column({
    type: "enum",
    enum: Type,
  })
  type: Type

  @OneToOne(type => Location, user => User)
  @JoinColumn()
  location: Location;

  @CreateDateColumn({ name: 'created_At' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_At' })
  updatedAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}