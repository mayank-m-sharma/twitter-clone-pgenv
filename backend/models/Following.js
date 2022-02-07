const { Model } = require("objection");
const User = require("./User");
class Following extends Model {
  static get tableName() {
    return "following";
  }

  static get useridColumn() {
    return "user_id";
  }
  static get followingUserIdColumn() {
    return "following_user_id";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["user_id", "following_user_id"],
    };
  }
  static relationMappings = {
    tweets: {
      relation: Model.HasManyRelation,
      modelClass: User,
      join: {
        from: "users.id",
        to: "users.user_id",
      },
    },
  };
}
module.exports = Following;
