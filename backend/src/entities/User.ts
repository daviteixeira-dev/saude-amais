import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn, } from "typeorm";
import { v4 as uuid } from "uuid";
import { Location } from "./Location";

@Entity("user")
export class User {

  @PrimaryColumn()
  id_user: string;

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
  type: string;

  @Column()
  id_location: string;



  constructor() {
    if (!this.id_user) {
      this.id_user = uuid();
    }
  }

}