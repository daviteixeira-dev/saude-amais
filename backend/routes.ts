import { Router } from "express";
import { CreateUserLoginController } from "./src/controllers/CreateUserLoginController";
import { CreateUserController } from "./src/controllers/CreateUserController";

const routes = Router();

/**
 * [X] C - CREATE
 * [X] R - READ
 * [ ] U - UPDATE
 * [X] D - DELETE
*/

routes.post("/user", new CreateUserController().handle);
routes.post("/userlogin", new CreateUserLoginController().handle);

export { routes };