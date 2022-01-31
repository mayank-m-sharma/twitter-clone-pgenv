const express = require("express");
const knex = require("./knexfile");
const app = express();
const PORT = require("./config/config").PORT;

// expressjson-
app.use(express.json());

// routes config -
app.use("/api/users", require("./routes/users"));
app.use("/api/tweets", require("./routes/tweets"));
app.get("/", (req, res) => {
  res.send("ok");
});

// server listeners
app.listen(process.env.PORT || PORT, () => {
  console.log("server running at port 8800");
});
