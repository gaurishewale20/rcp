import express from "express";
const router = express.Router();

import { addPass } from "../controllers/pass.js";

router.post('/', addPass);

export default router