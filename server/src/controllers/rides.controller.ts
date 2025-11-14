// src/controllers/rides.controller.ts
import type { Request, Response } from 'express';
import Booking from '../models/Booking';

export async function listRides(req: Request, res: Response) {
  try {
    const scope = req.query.scope as string | undefined;

    const filter: any = {};
    if (scope === 'today') {
      const start = new Date();
      start.setHours(0, 0, 0, 0);
      const end = new Date();
      end.setHours(23, 59, 59, 999);
      filter.createdAt = { $gte: start, $lte: end };
    }

    const bookings = await Booking.find(filter)
      .sort({ createdAt: -1 })
      .populate('user', 'name phone')
      .populate({
        path: 'driver',
        populate: { path: 'user', select: 'name phone' },
      })
      .lean();

    const rows = bookings.map((b: any) => ({
      _id: String(b._id),
      userName: b.user?.name || '-',
      userPhone: b.user?.phone || '-',
      driverName: b.driver?.user?.name || '-',
      status: b.status,
      fare: b.fare ?? 0,
      createdAt: b.createdAt,
    }));

    res.json(rows);
  } catch (err) {
    console.error('listRides error:', err);
    res.status(500).json({ message: 'Failed to fetch rides' });
  }
}
