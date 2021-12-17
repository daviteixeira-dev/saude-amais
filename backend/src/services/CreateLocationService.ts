import { getRepository } from "typeorm";
import { Location } from "../entities/Location";


interface LocationRequest {
    city: string,
    uf: string,
    cep: string,
    hood: string,
    street: string
}

export class CreateLocationService {

      async execute({city, uf, cep, hood, street}: LocationRequest): Promise<Location | Error> {

          const repo = getRepository(Location);

          const location = repo.create({
              city,
              uf,
              cep,
              hood,
              street
          });

          await repo.save(location);

          return location;
      }
}