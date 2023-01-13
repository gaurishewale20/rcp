import multer from "multer";
// const storage = multer.memoryStorage();
const storage = multer.diskStorage({
  filename: function (req, file, callback) {
    callback(null, Date.now() + file.originalname);
  },
});

const imageFilter = function (req, file, cb) {
  // accept image files only
  if (!file.originalname.match(/\.(jpg|jpeg|png|pdf)$/i)) {
    return cb(new Error("Only image or pdf files are accepted!"), false);
  }
  cb(null, true);
};

const upload = multer({ storage: storage, fileFilter: imageFilter });
export { upload };
// const multerUploads = multer({ storage }).single("vjti_id");
// export { multerUploads };
