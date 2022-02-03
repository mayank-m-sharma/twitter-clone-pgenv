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
      avatar: req.body.avatar,
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
  }
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
    });
    res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
