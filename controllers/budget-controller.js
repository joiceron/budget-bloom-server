import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const getBudgetOverview = async (_req, res) => {
    try {
      const budgetOverview = await knex("balance");
      if (!budgetOverview) {
        return res.status(404).json({
          message: `Balance overview not found`,
        });
      }
      res.json(budgetOverview);
    } catch (error) {
      res.status(500).json({
        message: `Unable to retrieve balance overview. ${error}`,
      });
    }
  };

  export { getBudgetOverview };