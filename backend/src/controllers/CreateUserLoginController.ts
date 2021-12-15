import { Request, Response } from 'express';
import { CreateUserLoginService } from '../services/CreateUserLoginService';

export class CreateUserLoginController {
  async handle(request: Request, response: Response) {
    const { username, email, password  } = request.body;

    const service = new CreateUserLoginService();

    const result = await service.execute({username, email, password});

    if(result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}