import { getRepository, Repository } from 'typeorm';
import { Location } from '../entities/Location';


export class DeleteLocationService {
    async execute(id: string): Promise<Location | Error> {
        const repo = getRepository(Location);

        const location = await repo.findOne(id);

        if (!location) {
            return new Error('Location does not exist!');
        }

        await repo.delete(id);
    }
}