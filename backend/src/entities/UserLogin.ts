import { Entity, Column, PrimaryColumn, CreateDateColumn, ObjectID } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("userlogin")
export class UserLogin {

  @PrimaryColumn()
  id_userlogin: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id_userlogin) {
      this.id_userlogin = uuid();
    }
  }

}