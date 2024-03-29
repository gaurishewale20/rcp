import express from "express";
const router = express.Router();

import {
  signin,
  signup,
  updateProfile,
  searchStudent,
  searchProfile,
} from "../controllers/user.js";
import auth from "../middleware/auth.js";

router.post("/signin", signin);
router.post("/signup", signup);
router.get("/searchStudent/:id", searchStudent);
router.get("/searchprofile/:id", searchProfile);
router.patch("/:id/updateProfile", auth, updateProfile);

router.get("/test", (req, res) => res.send("Route testing done!"));

export default router;
