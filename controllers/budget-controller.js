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

const decimalRegex = /^\d+(\.\d{2})?$/;

const validateBodyData = (body) => {
  const errors = [];
  const { salary, extras, rent, food, utilities, transportation } = body;
  if (!salary) errors.push("salary is required.");
  if (!extras) errors.push("extras is required.");
  if (!rent) errors.push("rent is required.");
  if (!food) errors.push("food is required.");
  if (!utilities) errors.push("utilities is required.");
  if (!transportation) errors.push("transportation is required.");

  return { isValid: errors.length === 0, errors };
};

const updateBudgetOverview = async (req, res) => {
  const { id } = req.params;
  const validation = validateBodyData(req.body);

  if (!validation.isValid) {
    return res.status(400).json({ errors: validation.errors });
  }

  try {
    const result = await knex("balance").where({ id }).first();
    if (!result) {
      return res.status(404).json({ message: `ID ${id} not found` });
    }
    const { id: removeId, ...updateData } = req.body;
    await knex("balance").where({ id }).update(updateData);

    const updatedBalance = await knex("balance").where({ id }).first();
    res.status(200).json(updatedBalance);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: `Unable to update balance with ID ${id}: ${error.message}`,
    });
  }
};

export { getBudgetOverview, updateBudgetOverview };
