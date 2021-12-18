import { Request, Response } from 'express';
import { GetLocationService } from "../services/GetLocationService";


export class GetLocationController {
    async handle(request: Request, response: Response) {

        const { id } = request.params;

        const service = new GetLocationService();

        const result = await service.execute(id);

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}