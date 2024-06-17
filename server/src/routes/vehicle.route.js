import { Router } from "express";
import {
  getRecentData,
  getAvgMsrpGraphData,
  getInventoryGraphData,
  getTableData,
} from "../controllers/vehicle.controller.js";

const router = Router();

router.get("/recent-data", getRecentData);
router.post("/graph-data/inventory", getInventoryGraphData);
router.post("/graph-data/avg-msrp", getAvgMsrpGraphData);
router.post("/table-data", getTableData);

export default router;
