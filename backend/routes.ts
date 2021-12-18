import { Router } from "express";
import { CreateLocationController } from "./src/controllers/CreateLocationController";
import { CreateUserController } from "./src/controllers/CreateUserController";
import { DeleteUserController } from "./src/controllers/DeleteUserController";
import { GetLocationController } from "./src/controllers/GetLocationController";
import { GetUserController } from "./src/controllers/GetUserController";
import { UpdateUserController } from "./src/controllers/UpdateUserController";
import { UpdateLocationController } from "./src/controllers/UpdateLocationController";
import { DeleteLocationController } from "./src/controllers/DeleteLocationController";


const routes = Router();


routes.post("/location", new CreateLocationController().handle);

routes.get("/location/:id", new GetLocationController().handle);

routes.put("/location/:id", new UpdateLocationController().handle);

routes.delete("/location/:id", new DeleteLocationController().handle);


routes.post("/user", new CreateUserController().handle);

routes.get("/user/:id", new GetUserController().handle);

routes.delete("/user/:id", new DeleteUserController().handle);

routes.put("/user/:id", new UpdateUserController().handle);


export{ routes };