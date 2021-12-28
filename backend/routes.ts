import { request, response, Router } from "express";
import { CreateLocationController } from "./src/controllers/CreateLocationController";
import { CreateUserController } from "./src/controllers/CreateUserController";
import { DeleteUserController } from "./src/controllers/DeleteUserController";
import { GetLocationController } from "./src/controllers/GetLocationController";
import { GetUserController } from "./src/controllers/GetUserController";
import { UpdateUserController } from "./src/controllers/UpdateUserController";
import { UpdateLocationController } from "./src/controllers/UpdateLocationController";
import { DeleteLocationController } from "./src/controllers/DeleteLocationController";
import { AuthController } from "./src/controllers/AuthController";
import  authMiddleware  from "./src/middlewares/authMiddleware";



const routes = Router();


routes.post("/location", new CreateLocationController().handle);

routes.get("/location/:id", new GetLocationController().handle);

routes.put("/location/:id", new UpdateLocationController().handle);

routes.delete("/location/:id", new DeleteLocationController().handle);


routes.post("/user", new CreateUserController().handle);


routes.post("/auth", new AuthController().handle);

routes.get("/user", authMiddleware,  new GetUserController().handle);

routes.put("/user", authMiddleware, new UpdateUserController().handle);

routes.delete("/user", authMiddleware, new DeleteUserController().handle);











export { routes };
