exports.seed = async function (knex) {
  await knex("balance").del();

  let previous_balance = 0;
  let entries = [];

  for (let month = 1; month <= 12; month++) {
    let monthStr = month.toString().padStart(2, "0");
    let total_income = 1300.0;
    let total_expenses = 1200.0;
    let total_balance = previous_balance + total_income - total_expenses;

    entries.push({
      id_user: 1,
      month: monthStr,
      year: 2025,
      total_balance,
      previous_balance,
      total_income,
      total_expenses,
      salary: 1300.0,
      extras: 400.0,
      rent: 600.0,
      food: 300.0,
      utilities: 200.0,
      transportation: 100.0,
    });

    previous_balance = total_balance;
  }

  await knex("balance").insert(entries);
};
