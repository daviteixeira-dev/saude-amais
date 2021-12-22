
import { Request, Response } from "express";
import { GetUserService } from "../services/GetUserService";

export class GetUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const service = new GetUserService(); 

        const result = await service.execute(id);

        if(result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}