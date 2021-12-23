import { Router } from "express";
import { CreateLocationController } from "./src/controllers/CreateLocationController";
import { CreateUserController } from "./src/controllers/CreateUserController";
import { DeleteUserController } from "./src/controllers/DeleteUserController";
import { GetUserController } from "./src/controllers/GetUserController";
import { UpdateUserController } from "./src/controllers/UpdateUserController";


const routes = Router();


routes.post("/location", new CreateLocationController().handle);

routes.post("/user", new CreateUserController().handle);

routes.get("/user/:id", new GetUserController().handle);

routes.delete("/user/:id", new DeleteUserController().handle);

routes.put("/user/:id", new UpdateUserController().handle);


export { routes };
