const router = require("express").Router();

const User = require("../models/User");

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

// @route - POST /api/users
// @desc  - create new user
// @access- PUBLIC
router.post("/", async (req, res) => {
  try {
    const newUser = await User.query().insert({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
