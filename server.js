const AWS = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
import express from "express";
import uploadRouter from "./src/services/s3-upload";

require("dotenv").config();

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const s3 = new AWS.S3();

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "pinterest-bucket-image-storage",
    acl: "public-read",
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString() + "-" + file.originalname);
    },
  }),
});

app.post("/upload", upload.single("image"), (req, res) => {
  res.json({ imageUrl: req.file.location });
});

const app = express();
app.use("/api", uploadRouter);

app.listen(5000, () => console.log("Server running on port 5000"));
