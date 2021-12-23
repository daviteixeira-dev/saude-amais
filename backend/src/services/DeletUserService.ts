import { getRepository, Repository } from 'typeorm';
import { User } from '../entities/User';

export class DeleteUserService {
    async execute(id: string): Promise<User | Error> {
        const repo = getRepository(User);

        const user = await repo.findOne(id);

        if (!user) {
            return new Error('User does not exist!');
        }

        await repo.delete(id);
    }
}