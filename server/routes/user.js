import express from "express";
const router = express.Router();

import { signin, signup, updateProfile } from "../controllers/user.js";
import multer from "multer";
import { storage } from "../config/cloudinaryConfig.js";
// const upload = multer({ storage });
const upload = multer({ dest: "uploads/" });

router.post("/signin", signin);
// router.post("/signup", signup);
router.post("/signup", upload.single("vjti_id"), (req, res) => {
  console.log(req.body, req.files);
  res.send("worksz");
});

router.post("/updateProfile", updateProfile);


router.get("/test", (req,res)=> res.send("Route testing done!") );

export default router;
