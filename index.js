import express from "express";
import cors from "cors";
import "dotenv/config";
import budgetRoutes from "./routes/budget.js";

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use((req, _res, next) => {
  console.log("Incoming Request:", req.method, req.url, req.body);
  next();
});

app.use("/budget", budgetRoutes);

app.listen(PORT, () => {
  console.log("This is running on " + PORT);
});
