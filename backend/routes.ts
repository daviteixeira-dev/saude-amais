import { Router } from "express";
import { CreateUserLoginController } from "./src/controllers/CreateUserLoginController";


const routes = Router();

routes.post("/login", new CreateUserLoginController().handle);

export{ routes };