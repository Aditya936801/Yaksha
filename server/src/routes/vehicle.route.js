import { Router } from "express";
import {
  getRecentData,
  getAvgMsrpGraphData,
  getInventoryGraphData,
  getTableData,
} from "../controllers/vehicle.controller.js";

const router = Router();

router.get("/recent-data", getRecentData);
router.get("/graph-data/inventory", getInventoryGraphData);
router.get("/graph-data/avg-msrp", getAvgMsrpGraphData);
router.get("/table-data", getTableData);

export default router;
