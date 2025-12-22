import express from "express"
import { login } from "../controllers/auth.controller.js"

const router = express.Router()

export default router

router.post("/", login)
