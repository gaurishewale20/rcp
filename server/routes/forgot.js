import express from "express";
const router = express.Router();

import { sendmail, resetpw } from "../controllers/forgot.js";

router.post("/sendmail", sendmail);
router.post("/reset_password", resetpw);

export default router;