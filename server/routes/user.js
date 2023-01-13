import express from "express";
const router = express.Router();

import { signin, signup } from "../controllers/user.js";

router.post("/signin", signin);
router.post("/signup", signup);

// router.post("/signup", upload.single("vjti_id"), (req, res) => {
//   console.log(req.body, req.files);
//   res.send("worksz");
// });

export default router;
