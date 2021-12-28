import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("system_user")
export class User {

  @PrimaryGeneratedColumn('uuid')
  id_users: string;

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
  birth_data: Date;

  @Column()
  adress: string;

  @Column() 
  type: string;

  constructor() {
    if (!this.id_users) {
      this.id_users = uuid();
    }
  }
}