import express from "express";
const router = express.Router();

import { addPass,getPendingRequests,getPastRequests, approveRequest, denyRequest } from "../controllers/pass.js";

router.post('/', addPass);
router.get('/pending',getPendingRequests);
router.get('/past',getPastRequests);
router.patch('/approve',approveRequest);
router.patch('/deny',denyRequest);
export default router