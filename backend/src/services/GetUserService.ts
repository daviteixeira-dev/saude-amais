import { getRepository } from 'typeorm';
import { User } from '../entities/User';

export class GetUserService {
    async execute(id: string): Promise<User | Error> {
        const userRepository = getRepository(User);

        const user = await userRepository.findOne(id);

        if (!user) {
            return new Error('User does not exist!');
        }

        return user;
    }
}