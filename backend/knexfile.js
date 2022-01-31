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
