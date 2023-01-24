const express = require("express");
const Router = express.Router();
const Account2 = require("./Account2Schema");
const {  updatElement } = require("./mongoose");
const {upload} = require('./multer')

Router.post("/upload", upload.array("files"), (req, res) => {
  try {
    
    //createElement({ name: req.files[0].filename }, uploads);
    if (req.body.type === "image") {
      updatElement(
        { username: req.body.username },
        { personalImage: req.files[0].filename },
        Account2
      );
    }
    if (req.body.type === "video") {
      updatElement(
        { username: req.body.username },
        { personalVideo: req.files[0].filename },
        Account2
      );
    }
    const link = { link: req.files[0].filename };
    res.status(201).send(link);

  } catch (error) {
    res.status(400).send(error.message);
  }
});
module.exports = Router;
