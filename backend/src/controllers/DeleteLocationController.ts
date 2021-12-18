import { Request, Response } from 'express';
import { DeleteLocationService } from '../services/DeleteLocationService';

export class DeleteLocationController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const service = new DeleteLocationService();

        const result = await service.execute(id);

        if(result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.status(200).end();
    }
}