const { Model } = require("objection");

class Tweet extends Model {
  static get tableName() {
    return "tweets";
  }

  $beforeInsert() {
    this.created_at = new Date().toISOString();
  }

  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  }

  static get bodyColumn() {
    return "body";
  }

  static get tweetMediaColumn() {
    return "tweet_media";
  }
  static get replyCountColumn() {
    return "reply_count";
  }

  static get retweetCountColumn() {
    return "retweet_count";
  }

  static get heartsCountColumn() {
    return "hearts_count";
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
        tweet_media: { type: "string" },
        user_id: { type: "string" },
        reply_count: { type: "integer" },
        retweet_count: { type: "integer" },
        hearts_count: { type: "integer" },
        created_at: { type: "string" },
        updated_at: { type: "string" },
      },
    };
  }
  static relationMappings() {
    const User = require("./User");
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "tweets.user_id",
          to: "users.id",
        },
      },
    };
  }
}
module.exports = Tweet;
