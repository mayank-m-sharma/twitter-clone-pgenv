const { Model } = require("objection");
const Tweet = require("./Tweet");
class User extends Model {
  static get tableName() {
    return "users";
  }

  static get nameColumn() {
    return "name";
  }
  static get usernameColumn() {
    return "username";
  }
  static get emailColumn() {
    return "email";
  }
  static get passwordColumn() {
    return "password";
  }
  static get avatarColumn() {
    return "avatar";
  }
  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "email", "password", "username"],
      properties: {
        id: { type: "integer" },
        name: { type: "string", minLength: 1, maxLength: 255 },
        email: { type: "string" },
        password: { type: "string" },
        avatar: { type: "string" },
        username: { type: "string" },
      },
    };
  }
  static relationMappings = {
    tweets: {
      relation: Model.HasManyRelation,
      modelClass: Tweet,
      join: {
        from: "users.id",
        to: "tweets.user_id",
      },
    },
  };
}
module.exports = User;
