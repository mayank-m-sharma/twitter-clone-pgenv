// For Querying
const { Model } = require("objection");
const Knex = require("knex");

// Initialize knex.
const knex = Knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "postgres", // replace with your mysql username
    password: "root", // replace with your mysql password
    database: "twitter100", // replace with your db name
    port: 5433,
  },
});

// Give the Knex instance to Objection.
Model.knex(knex);

module.exports = knex;

// For migration -
// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "twitter100",
      user: "postgres",
      password: "root",
      port: 5433,
      host: "localhost",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
