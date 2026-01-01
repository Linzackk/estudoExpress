import {Router} from "express";
import { getUser, getUserError } from "../controllers/user.controller";

const router = Router();

export default router;

router.get("/:id", getUserError);
