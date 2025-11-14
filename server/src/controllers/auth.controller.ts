// src/controllers/auth.controller.ts
import type { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import AdminUser from '../models/AdminUser';
import { signAccess, signRefresh, verifyRefresh } from '../utils/jwt';

export async function login(req: Request, res: Response) {
  const { email, password } = req.body as { email: string; password: string };

  const user = await AdminUser.findOne({ email });
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const payload = { id: user.id, name: user.name, role: user.role };
  const accessToken = signAccess(payload);
  const refreshToken = signRefresh(payload);

  res
    .cookie('accessToken', accessToken, {
      httpOnly: true,
      sameSite: 'lax',
    })
    .cookie('refreshToken', refreshToken, {
      httpOnly: true,
      sameSite: 'lax',
    })
    .json({ user: payload });
}

export async function refresh(req: Request, res: Response) {
  const token = (req as any).cookies?.refreshToken;
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const payload: any = verifyRefresh(token);
    const accessToken = signAccess({
      id: payload.id,
      name: payload.name,
      role: payload.role,
    });

    res
      .cookie('accessToken', accessToken, {
        httpOnly: true,
        sameSite: 'lax',
      })
      .json({ ok: true });
  } catch (err) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
}

export async function me(req: Request, res: Response) {
  const user = (req as any).user;
  res.json({ user });
}

export async function logout(_req: Request, res: Response) {
  res.clearCookie('accessToken');
  res.clearCookie('refreshToken');
  res.json({ ok: true });
}
