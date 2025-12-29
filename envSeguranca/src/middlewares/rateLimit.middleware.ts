import rateLimit from "express-rate-limit";

export const loginRateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 5, // 5 Tentativas,
    message: {
        message: "Muitas tentativas de Login. Tente novamente mais tarde"
    },
    standardHeaders: true,
    legacyHeaders: false,
});

export const apiRateLimiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minutos
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
});
