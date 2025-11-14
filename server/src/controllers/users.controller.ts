import type { Request, Response } from 'express';
import User from '../models/User';

export async function listUsers(_req: Request, res: Response) {
  try {
    const users = await User.find({ role: 'user' })
      .select('name email phone createdAt')
      .lean();

    res.json(users);
  } catch (err) {
    console.error('listUsers error:', err);
    res.status(500).json({ message: 'Failed to fetch users' });
  }
}
