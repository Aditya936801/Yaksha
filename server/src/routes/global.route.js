import { Router } from "express";
import { getMakeFilterList } from "../controllers/global.controller.js";

const router = Router();

router.get("/make-filter/list", getMakeFilterList);

export default router;
