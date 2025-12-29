import { Request, Response, NextFunction } from "express";
export declare function autenticarToken(req: Request, res: Response, next: NextFunction): Response<any, Record<string, any>> | undefined;
export declare function autorizar(perfisPermitidos: ("admin" | "user")[]): (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=auth.middleware.d.ts.map