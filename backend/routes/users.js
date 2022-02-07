const router = require("express").Router();
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Following = require("../models/Following");
const verifyToken = require("../middleware/verifyJwt");
// @route - GET /api/users
// @desc  - get all users
// @access- PUBLIC
router.get("/", async (req, res) => {
  try {
    const user = await User.query();

    res.json(user);
  } catch (error) {
    console.log(error);
  }
});

// @route - POST /api/users/register
// @desc  - create new user
// @access- PUBLIC
router.post("/register", async (req, res) => {
  try {
    const newUser = await User.query().insert({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      avatar: req.body.avatar,
      username: req.body.username,
    });
    const addedUser = await User.query()
      .select("*")
      .where("email", "=", req.body.email);

    const accessToken = jwt.sign({ id: addedUser[0].id }, "secret", {
      expiresIn: "1d",
    });
    const { password, ...others } = addedUser[0];
    const authStatus = {
      login: "success",
    };
    return res.status(201).json({ accessToken, authStatus, ...others });
  } catch (error) {
    console.log(error);
  }
});

// @route - POST /api/users/login
// @desc  - authenticate user login
// @access- PUBLIC
router.post("/login", async (req, res) => {
  try {
    const user = await User.query()
      .select("*")
      .where("email", "=", req.body.email);
    if (
      !req.body.email ||
      !req.body.password ||
      user.length === 0 ||
      user[0].password !== req.body.password
    ) {
      return res.json({ msg: "ERROR" });
    } else {
      const accessToken = jwt.sign({ id: user[0].id }, "secret", {
        expiresIn: "1d",
      });
      // const {password, ...others} = user
      const authStatus = {
        login: "success",
      };
      const { password, ...others } = user[0];
      return res.status(200).json({ accessToken, authStatus, ...others });
    }
  } catch (error) {
    console.log(error);
  }
  // console.log(req.body);
  // res.send("ok");
});

// @route - PUT /api/users
// @desc  - edit user details
// @access- PRIVATE
router.put("/:id", async (req, res) => {
  try {
    const updatedUser = await User.query().findById(req.params.id).patch({
      name: req.body.name,
      email: req.body.email,
      avatar: req.body.avatar,
      username: req.body.username,
    });
    res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error);
  }
});

// @route - POST /api/users/follow/:follow_user_id
// @desc  - Follow a user
// @access- PRIVATE
router.post("/follow/:following_user_id", verifyToken, async (req, res) => {
  try {
    // Reject if already following -
    const alreadyFollowing = await Following.query()
      .select("*")
      .where("user_id", "=", req.user.id)
      .where("following_user_id", "=", req.params.following_user_id);
    if (alreadyFollowing.length === 0) {
      const followUser = await Following.query().insert({
        user_id: req.user.id,
        following_user_id: req.params.following_user_id,
      });
      res.status(200).json({ followUser, msg: "following successfull" });
    } else {
      res.status(401).json({ msg: "cannot follow a user more than once" });
    }
  } catch (error) {
    console.log(error);
    res.status(401).json({ msg: "following error" });
  }
});

// @route - POST /api/users/unfollow/:follow_user_id
// @desc  - Unfollow a user
// @access- PRIVATE
router.post("/unfollow/:following_user_id", verifyToken, async (req, res) => {
  try {
    const unfollowUser = await Following.query()
      .delete()
      .where("user_id", "=", req.user.id)
      .where("following_user_id", "=", req.params.following_user_id);
    res.status(200).json({ unfollowUser, msg: "unfollowing successfull" });
  } catch (error) {
    console.log(error);
    res.status(401).json({ msg: "unfollowing error" });
  }
});

module.exports = router;
