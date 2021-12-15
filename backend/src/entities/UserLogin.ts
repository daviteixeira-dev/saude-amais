import { Entity, Column, PrimaryColumn, CreateDateColumn, ObjectID } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("user_login")
export class UserLogin {

  @PrimaryColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if(!this.id) {
      this.id = uuid();
    }
  }

}