const Tweet = require("../models/Tweet");
const User = require("../models/User");
const router = require("express").Router();

// @route - GET /api/tweets
// @desc  - get all tweets
// @access- PUBLIC
router.get("/", async (req, res) => {
  try {
    const tweets = await Tweet.query()
      .select("tweets.*", "user.*")
      .joinRelated("user")
      .orderBy("tweets.created_at");
    res.json(tweets);
  } catch (error) {
    console.log(error);
    res.status(501).json(error);
  }
});

// @route - GET /api/tweets/:user_id
// @desc  - get all tweets of a user
// @access- PUBLIC
router.get("/:user_id", async (req, res) => {
  try {
    const user_id = req.params.user_id;
    const tweets = await Tweet.query().where("user_id", "=", user_id);
    const user = await User.query().select("*").where("id", "=", user_id);

    res.status(200).json({ tweets, user });
  } catch (error) {
    console.log(error);
  }
});

// @route - POST /api/tweets
// @desc  - create new user
// @access- PUBLIC
router.post("/", async (req, res) => {
  try {
    const newTweet = await Tweet.query().insert({
      body: req.body.body,
      user_id: req.body.user_id,
      tweet_media: req.body.tweet_media,
      reply_count: req.body.reply_count,
      hearts_count: req.body.hearts_count,
      retweet_count: req.body.retweet_count,
      created_at: req.body.created_at,
      updated_at: req.body.updated_at,
    });
    res.status(201).json(newTweet);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "error" });
  }
});

module.exports = router;
