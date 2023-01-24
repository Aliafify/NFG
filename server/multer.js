var multer = require("multer");
const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../client/src/assets/");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `${req.body.name}.${ext}`);
  },
});
const multerFilter = (req, file, cb) => {
  if (
    file.mimetype.split("/")[1] === "jpg" ||
    "jpeg" ||
    "png" ||
    "webp" ||
    "mp4" ||
    "avi" ||
    "webm"
  ) {
    cb(null, true);
  } else {
    cb((req.error = "Not a supported File!!"), false);
  }
};
const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});
module.exports = { multerFilter, multerFilter, upload };
