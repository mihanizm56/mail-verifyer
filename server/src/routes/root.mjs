import express from "express";
import apiCtrl from "../controllers/api/api.mjs";

const router = express.Router();

router.get("/api", apiCtrl.get);

export default router;
