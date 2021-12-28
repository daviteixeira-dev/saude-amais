import { getRepository } from "typeorm";
import { Location } from "../entities/Location";

interface LocationRequest {
    id: string;
    city: string;
    uf: string;
    cep: string;
    hood: string;
    street: string;
}

export class UpdateLocationService {
    async execute({ id, city, uf, cep, hood, street }: LocationRequest) {
        const repo = getRepository(Location);

        const location = await repo.findOne(id);

        if (!location) {
            return new Error('Location does not exist!');
        }

        location.city = city ? city : location.city;
        location.uf = uf ? uf : location.uf;
        location.cep = cep ? cep : location.cep;
        location.hood = hood ? hood : location.hood;
        location.street = street ? street : location.street;


        await repo.save(location);

        return location;
    }
}