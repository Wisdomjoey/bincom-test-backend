import { Request, Response } from "express";
export declare const fetchLGAResults: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const fetchPUResults: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
