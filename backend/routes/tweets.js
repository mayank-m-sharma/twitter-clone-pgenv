const Tweet = require("../models/Tweet");
const User = require("../models/User");
const router = require("express").Router();

// @route - GET /api/tweets
// @desc  - get all tweets
// @access- PUBLIC
router.get("/", async (req, res) => {
  try {
    const tweets = await Tweet.query();
    res.status(200).json(tweets);
  } catch (error) {
    console.log(error);
    res.status(501).json({ msg: "error" });
  }
});

// @route - GET /api/tweets/:user_id
// @desc  - get all tweets of a user
// @access- PUBLIC
router.get("/:user_id", async (req, res) => {
  try {
    const user_id = req.params.user_id;
    const tweets = await Tweet.query().where("user_id", "=", user_id);
    const username = await User.query()
      .select("name")
      .where("id", "=", user_id);
    res.status(200).json({ tweets, username });
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
    });
    res.status(201).json(newTweet);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "error" });
  }
});

module.exports = router;
