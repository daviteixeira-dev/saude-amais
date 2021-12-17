import { getRepository } from "typeorm";
import { UserLogin } from "../entities/UserLogin";

interface UserLoginRequest {
  username: string,
  email: string,
  password: string
}

export class CreateUserLoginService {

  async execute({ username, email, password }: UserLoginRequest): Promise<UserLogin | Error> {

    const repo = getRepository(UserLogin);

    // SELECT * FROM user_login WHERE username = 'username' LIMIT 1
    if (await repo.findOne({ email })) {
      return new Error("Email already in use!");
    }

    const userlogin = repo.create({
      username,
      email,
      password
    });

    await repo.save(userlogin);

    return userlogin;
  }
}