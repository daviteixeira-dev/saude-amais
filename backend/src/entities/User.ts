import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn,  } from "typeorm";
import { v4 as uuid } from "uuid";
import { Location } from "./Location";

@Entity("system_user")
export class User {

  @PrimaryColumn()
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
  birth_data: Date;

  @Column()
  type: string;

  @Column()
  id_location: string;

  @OneToOne(() => Location)
  @JoinColumn({ name: "id_location" })
  location: Location;

  constructor() {
    if(!this.id) {
      this.id = uuid();
    }
  }

}