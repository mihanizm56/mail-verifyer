import express from "express";
import usersCtrl from "../controllers/users/controller.mjs";
import { userTokenVerification } from "../middlewares/user-token/user-token.mjs";

const router = express.Router();

// route to put new user in db
router.put("/user", usersCtrl.put);

// route to verify user with token
router.get("/user/:token", userTokenVerification, usersCtrl.get);

export default router;
