import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn,  } from "typeorm";
import { v4 as uuid } from "uuid";
import { Location } from "./Location";

@Entity("system_user")
export class User {

  @PrimaryColumn()
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
    if(!this.id_users) {
      this.id_users = uuid();
    }
  }

}