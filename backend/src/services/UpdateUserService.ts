import { getRepository } from "typeorm";
import { User } from "../entities/User";

interface UserUpdate {
    id: string;
    name: string;
    lastname: string;
    email: string;
    password: string;
}

export class UpdateUserService {
    async execute({id, name, lastname, email, password}: UserUpdate) {
        const repo = getRepository(User);

        const user = await repo.findOne(id);

        if(!user) {
            return new Error('User does not exist!');
        }

        user.name = name ? name : user.name;
        user.lastname = lastname ? lastname : user.lastname;
        user.email = email ? email : user.email;
        user.password = password ? password : user.password;

        await repo.save(user);

        return user;
    }
}