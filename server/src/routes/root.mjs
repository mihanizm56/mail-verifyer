import express from "express";
import usersCtrl from "../controllers/users/controller.mjs";

const router = express.Router();

// route to put new user in db
router.put("/user", usersCtrl.put);

// route to verify user with token
router.get("/user/:token", usersCtrl.get);

export default router;
