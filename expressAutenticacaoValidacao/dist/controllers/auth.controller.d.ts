import { Request, Response } from "express";
export declare function testeAuth(req: Request, res: Response): void;
export declare function login(req: Request, res: Response): Response<any, Record<string, any>>;
export declare const refreshToken: (req: Request, res: Response) => Response<any, Record<string, any>> | undefined;
export declare const logout: (req: Request, res: Response) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=auth.controller.d.ts.map