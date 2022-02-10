import { Router } from "express";
const router = Router();
import {checkRolesExisted, checkUserOrEmail } from '../middlewares'
import { signUp, signIn } from "../controllers/auth.controllers";

router.post("/signup", [checkRolesExisted, checkUserOrEmail],signUp);
router.post("/signin", signIn);

export default router;
