// src/utils/jwt.ts
import jwt, { type Secret, type SignOptions } from 'jsonwebtoken';

const ACCESS_SECRET: Secret = process.env.JWT_SECRET || 'access_secret';
const REFRESH_SECRET: Secret = process.env.REFRESH_SECRET || 'refresh_secret';

const ACCESS_EXPIRES: SignOptions['expiresIn'] =
  (process.env.JWT_EXPIRES as SignOptions['expiresIn']) || '15m';

const REFRESH_EXPIRES: SignOptions['expiresIn'] =
  (process.env.REFRESH_EXPIRES as SignOptions['expiresIn']) || '7d';

export function signAccess(payload: any) {
  const options: SignOptions = { expiresIn: ACCESS_EXPIRES };
  return jwt.sign(payload, ACCESS_SECRET, options);
}

export function signRefresh(payload: any) {
  const options: SignOptions = { expiresIn: REFRESH_EXPIRES };
  return jwt.sign(payload, REFRESH_SECRET, options);
}

export function verifyAccess(token: string) {
  return jwt.verify(token, ACCESS_SECRET);
}

export function verifyRefresh(token: string) {
  return jwt.verify(token, REFRESH_SECRET);
}
