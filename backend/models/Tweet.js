const { Model } = require("objection");

class Tweet extends Model {
  static get tableName() {
    return "tweets";
  }

  static get bodyColumn() {
    return "body";
  }

  static get userIdColumn() {
    return "user_id";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["body", "user_id"],
      properties: {
        id: { type: "integer" },
        body: { type: "string", minLength: 1, maxLength: 255 },
        userId: { type: "string" },
      },
    };
  }
}
module.exports = Tweet;
