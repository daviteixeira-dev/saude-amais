import { Router } from "express";
import { CreateLocationController } from "./src/controllers/CreateLocationController";
import { CreateUserController } from "./src/controllers/CreateUserController";


const routes = Router();


routes.post("/user", new CreateUserController().handle);

export { routes };