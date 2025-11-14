import type { Request, Response } from 'express';
import User from '../models/User';
import DriverProfile from '../models/DriverProfile';
import Booking from '../models/Booking';

export async function getStats(_req: Request, res: Response) {
  try {
    const startOfToday = new Date();
    startOfToday.setHours(0, 0, 0, 0);

    const [totalUsers, totalDrivers, todayRides, activeDrivers] =
      await Promise.all([
        User.countDocuments({ role: 'user' }),
        User.countDocuments({ role: 'driver' }),
        Booking.countDocuments({ createdAt: { $gte: startOfToday } }),
        DriverProfile.countDocuments({ is_available: true }),
      ]);

    res.json({
      totalUsers,
      totalDrivers,
      todayRides,
      activeDrivers,
    });
  } catch (err) {
    console.error('Stats error:', err);
    res.status(500).json({ message: 'Failed to fetch stats' });
  }
}
