import { getRepository } from "typeorm";
import { User } from "../entities/User";

interface UserRequest {
  name: string,
  lastname: string,
  email: string,
  password: string,
  cpf: string,
  birth_date: Date,
  address: string,
  type: string,
}

export class CreateUserService {
  async execute({ name, lastname, email, password, cpf, birth_date, address, type }: UserRequest): Promise<User | Error> {

    const repo = getRepository(User);

    if (await repo.findOne({ email })) {
      return new Error('Email already exists!');
    }

    const user = repo.create({
      name,
      lastname,
      email,
      password,
      cpf,
      birth_date,
      address,
      type
    });

    await repo.save(user);

    return user;

  }
}