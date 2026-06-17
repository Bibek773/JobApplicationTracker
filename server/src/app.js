// app.js
import express from "express";
import applicationRoutes from "./routes/applicationRoutes.js";

const app = express();

app.use(express.json());
app.use("/api/job", applicationRoutes);

export default app;