import { Request, Response } from 'express';
import { UpdateLocationService } from '../services/UpdateLocationService';

export class UpdateLocationController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const { city, uf, cep, hood, street } = request.body;

        const service = new UpdateLocationService();

        const result = await service.execute({ id, city, uf, cep, hood, street });

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.json(result)
    }
}