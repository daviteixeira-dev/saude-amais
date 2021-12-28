import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

export class CreateUserController {
  async handle(request: Request, response: Response) {

    const { name, lastname, email, password, cpf, birth_data, adress, type } = request.body;

    const service = new CreateUserService();

    const result = await service.execute({
      name,
      lastname,
      email,
      password,
      cpf,
      birth_data,
      adress,
      type,
    });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);

  }
}