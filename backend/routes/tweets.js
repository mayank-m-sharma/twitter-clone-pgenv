const Tweet = require("../models/Tweet");
const User = require("../models/User");
const router = require("express").Router();
const multer = require("multer");

// Multer setup -
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

// Multer file accept strategy
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/gif" ||
    file.mimetype === "video/mp4"
  ) {
    cb(null, true);
  } else {
    cb("Unsupported file type", false);
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

// @route - GET /api/tweets
// @desc  - get all tweets
// @access- PUBLIC
router.get("/", async (req, res) => {
  try {
    const tweets = await Tweet.query()
      .select("tweets.*", "user.name", "user.username", "user.avatar")
      .joinRelated("user")
      .orderBy("tweets.created_at", "DESC");
    const { password, ...others } = tweets;
    res.json({ ...others });
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
router.post("/", upload.single("media"), async (req, res) => {
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
      media: !req.file ? "NOIMG" : req.file.path,
    });
    res.status(201).json({ newTweet, msg: "tweetcreated" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "error" });
  }
  // console.log(req.body);
});

module.exports = router;
