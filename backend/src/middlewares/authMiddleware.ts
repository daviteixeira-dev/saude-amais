import { Request, Response, NextFunction, request } from "express";
const jwt = require("jsonwebtoken");

interface TokenPayload {
    id: string;
    iat: number;
    exp: number;
}

export default function authMiddleware(requet: Request, response: Response, next: NextFunction){
    const { authorization } = requet.headers;

    if(!authorization) {
        return response.sendStatus(401);
    }

    const token = authorization.replace('Bearer', '').trim();

    try {
        const data = jwt.verify(token, 'secret');
        
        const {id} = data as TokenPayload;

        request.userId = id;

        return next();
    }catch {
        return response.sendStatus(401);
    }
}