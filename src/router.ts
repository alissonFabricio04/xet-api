import { Router } from "express";


import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { GetLast3MessagesController } from "./controllers/GetLast3MessagesController";
import { ProfileUserController } from "./controllers/ProfileUserController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";


const routes = Router();


const authenticateUserController = new AuthenticateUserController();
const createMessageController = new CreateMessageController();
const getLast3MessagesController = new GetLast3MessagesController();
const profileUserController = new ProfileUserController();


routes.post("/authenticate", authenticateUserController.handle);
routes.post("/messages", ensureAuthenticated, createMessageController.handle);
routes.get("/messages/last3", getLast3MessagesController.handle);
routes.get("/profile", ensureAuthenticated, profileUserController.handle);


export { routes }