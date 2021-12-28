import { Request, Response } from 'express';
import { DeleteUserService } from '../services/DeletUserService';

export class DeleteUserController {
    async handle(request: Request, response: Response) {
        const id = request.userId;

        const service = new DeleteUserService();

        const result = await service.execute(id);

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.status(200).end();
    }
}