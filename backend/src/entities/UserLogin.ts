import { Entity, Column, PrimaryColumn, CreateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./User";

@Entity("userlogin")
export class UserLogin {

  @PrimaryColumn()
  id_userlogin: string;

  @Column()
  username: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id_userlogin) {
      this.id_userlogin = uuid();
    }
  }

}