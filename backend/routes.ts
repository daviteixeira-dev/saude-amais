import { Router } from "express";
import { CreateUserLoginController } from "./src/controllers/CreateUserLoginController";

const routes = Router();

/**
 * [X] C - CREATE
 * [X] R - READ
 * [ ] U - UPDATE
 * [X] D - DELETE
*/

routes.post("/userlogin", new CreateUserLoginController().handle);

export { routes };