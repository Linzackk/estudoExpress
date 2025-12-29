import Router from "express";
import { login } from "../controllers/auth.controller";
import { loginRateLimiter } from "../middlewares/rateLimit.middleware";

const router = Router()

export default router

router.post(
    "/login",
    loginRateLimiter, // Limita só no login
    login
)