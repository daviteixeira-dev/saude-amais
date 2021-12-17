import { getRepository } from "typeorm";
import { UserLogin } from "../entities/UserLogin";

interface UserLoginRequest {
  username: string
}

export class CreateUserLoginService {

  async execute({ username }: UserLoginRequest): Promise<UserLogin | Error> {

    const repo = getRepository(UserLogin);

    // SELECT * FROM user_login WHERE username = 'username' LIMIT 1
    if (await repo.findOne({ username })) {
      return new Error("username already in use!");
    }

    const userlogin = repo.create({
      username
    });

    await repo.save(userlogin);

    return userlogin;
  }
}