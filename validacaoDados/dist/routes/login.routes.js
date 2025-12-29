"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_controller_1 = require("../controller/login.controller");
const validarLogin_1 = require("../middleware/validarLogin");
const validarResultado_1 = require("../middleware/validarResultado");
const router = (0, express_1.Router)();
router.post("/", validarLogin_1.validarLoginValidator, validarResultado_1.validarResultado, login_controller_1.loginController);
exports.default = router;
