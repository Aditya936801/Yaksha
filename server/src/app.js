import express from "express";
import cors from "cors";
import globalRoutes from "./routes/global.route.js";
import vehicleRoutes from "./routes/vehicle.route.js";

const app = express();

app.use(cors());

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use("/api/global", globalRoutes);
app.use("/api/vehicle", vehicleRoutes);

export { app };
