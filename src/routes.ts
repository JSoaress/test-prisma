import { Router } from "express";
import { CreateUserController } from "./api/modules/users/useCases/createUser/CreateUserController";
import { FindAllUsersController } from "./api/modules/users/useCases/findAllUsers/FindAllUsersController";

const routes = Router();

routes.get("/users", new FindAllUsersController().handle);
routes.post("/users", new CreateUserController().handle);

export { routes };
