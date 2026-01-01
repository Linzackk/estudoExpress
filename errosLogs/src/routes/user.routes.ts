import {Router} from "express";
import { getUser } from "../controllers/user.controller";

const router = Router();

export default router;

router.get("/:id", getUser);
