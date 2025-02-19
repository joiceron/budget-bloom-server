import express from "express";
import * as budgetController from "../controllers/budget-controller.js";

const router = express.Router();

router
  .route("/")
  .get(budgetController.getBudgetOverview);

export default router;