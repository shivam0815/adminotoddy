// src/middleware/pagination.ts
import type { Request, Response, NextFunction } from 'express';

export function paginate(req: Request, _res: Response, next: NextFunction) {
  const page = Math.max(1, parseInt((req.query.page as string) || '1', 10));
  const limit = Math.min(100, Math.max(1, parseInt((req.query.limit as string) || '20', 10)));

  (req as any).page = page;
  (req as any).limit = limit;

  next();
}
