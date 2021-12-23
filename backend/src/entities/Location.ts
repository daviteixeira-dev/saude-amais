import { Entity, Column, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";


@Entity("location")
export class Location {

  @PrimaryColumn()
  id: string;

  @Column()
  city: string;

  @Column()
  uf: string;

  @Column()
  cep: string;

  @Column()
  hood: string;

  @Column()
  street: string;


  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }

}