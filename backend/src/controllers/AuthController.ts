import {Request, Response} from 'express';
import { getRepository } from 'typeorm';
import { User } from '../entities/User';
const jwt = require('jsonwebtoken');

export class AuthController {
    async handle(request: Request, response: Response) {
        const repo = getRepository(User);
        const { email, password } = request.body;

        const user = await repo.findOne({ where: {email}});

        if(!user) {
            return response.sendStatus(401);
        }

        if(user.password !== password) {
            return response.sendStatus(401);
        }

        const token = jwt.sign({id: user.id_users}, 'secret', { expiresIn: '1d'})

        delete user.password;
        
        return response.json({
            user,
            token
        });

    }
}

