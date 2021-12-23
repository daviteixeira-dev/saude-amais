import { Request, Response } from 'express';
import { UpdateUserService } from '../services/UpdateUserService';

export class UpdateUserController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const { name, lastname, email, password } = request.body;

        const service = new UpdateUserService();

        const result = await service.execute({ id, name, lastname, email, password });

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.json(result)
    }
}