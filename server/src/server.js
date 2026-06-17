// Server entry point: connects to DB and starts listening - to be implemented
// server.js
import mongoose from "mongoose";
import app from "./app.js";

await mongoose.connect("mongodb://127.0.0.1:27017/job_application_tracker");

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});