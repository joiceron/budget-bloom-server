exports.up = function (knex) {
  return knex.schema.createTable("balance", function (table) {
    table.increments("id");
    table.integer("id_user").notNullable().defaultTo(1);
    table.string("month", 2).notNullable();
    table.integer("year").notNullable();
    table.decimal("total_balance", 10, 2).notNullable();
    table.decimal("previous_balance", 10, 2).notNullable();
    table.decimal("total_income", 10, 2).notNullable();
    table.decimal("total_expenses", 10, 2).notNullable();
    table.decimal("salary", 10, 2).notNullable();
    table.decimal("extras", 10, 2).notNullable();
    table.decimal("rent", 10, 2).notNullable();
    table.decimal("food", 10, 2).notNullable();
    table.decimal("utilities", 10, 2).notNullable();
    table.decimal("transportation", 10, 2).notNullable();
    table.unique(["id_user", "month", "year"], "unique_balance");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("balance");
};
