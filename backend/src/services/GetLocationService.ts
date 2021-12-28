import { getRepository } from "typeorm";
import { Location } from '../entities/Location';
export class GetLocationService {
    async execute(id: string): Promise<Location | Error> {
        const repo = getRepository(Location);

        const location = await repo.findOne(id);

        if (!location) {
            return new Error('Location does not exist!');
        }

        return location;
    }
}