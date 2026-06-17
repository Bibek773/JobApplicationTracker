// app.js
import express from "express";
import applicationRoutes from "./routes/applicationRoutes.js";
import cors from "cors";

const app = express();
app.use(cors())
app.use(express.json());
app.use("/api/applications", applicationRoutes);

export default app;