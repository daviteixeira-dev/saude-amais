import { Request, Response } from "express";
import { CreateLocationService } from "../services/CreateLocationService";


export class CreateLocationController {
  async handle(request: Request, response: Response) {
    const { city, uf, cep, hood, street } = request.body;

    const service = new CreateLocationService();

    const result = await service.execute({
      city,
      uf,
      cep,
      hood,
      street
    });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result)
  }
}