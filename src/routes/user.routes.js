import { Router } from "express";
const router = Router();
import { createUser } from "../controllers/user.controller";
import { verifyToken, isAdmin, checkRolesExisted } from "../middlewares";

router.post("/", [verifyToken, isAdmin, checkRolesExisted], createUser);

export default router;
