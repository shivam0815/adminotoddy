// src/controllers/driver.controller.ts
import type { Request, Response } from 'express';
import DriverProfile from '../models/DriverProfile';

/**
 * GET /api/drivers
 * List all drivers for admin panel
 */
export async function listDrivers(_req: Request, res: Response) {
  try {
    const drivers = await DriverProfile.find()
      .populate('user', 'name phone') // join user details
      .lean();

    const clean = drivers
    
  .filter((d: any) => d.user) // ⬅️ remove drivers without a user
  .map((d: any) => {
    const user = d.user as any;

    return {
      _id: String(d._id),
      name: user.name,
      phone: user.phone,
      status: d.is_available ? 'ACTIVE' : 'INACTIVE',
      city: '-',
      createdAt: d.createdAt
    };
  });


    res.json(clean);
  } catch (err) {
    console.error('listDrivers error:', err);
    res.status(500).json({ message: 'Failed to fetch drivers' });
  }
}
