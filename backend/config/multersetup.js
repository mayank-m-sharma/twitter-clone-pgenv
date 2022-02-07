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

module.exports = {
  fileFilter,
  storage,
};
