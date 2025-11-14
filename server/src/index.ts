// src/index.ts
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { connectDB } from './config/db';
import authRoutes from './routes/auth.routes';
import driverRoutes from './routes/driver.routes';
import AdminUser from './models/AdminUser';
import bcrypt from 'bcrypt';
import { errorHandler } from './middleware/error';
import statsRoutes from './routes/stats.routes';
import adminAuth from './routes/adminAuth';
import userRoutes from './routes/users.routes';
import ridesRoutes from './routes/rides.routes';

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173',
    credentials: true,
  })
);
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(
  rateLimit({
    windowMs: 60_000,
    max: 200,
  })
);

app.get('/api/health', (_req, res) => res.json({ ok: true }));

app.use('/api/auth', authRoutes);
app.use('/api/drivers', driverRoutes);

app.use('/api/stats', statsRoutes);

app.use('/admin/api', adminAuth);
app.use('/api/users', userRoutes);
app.use('/api/rides', ridesRoutes);


app.use(errorHandler);

const PORT = process.env.PORT || 3000;

async function start() {
  try {
    await connectDB(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/otoddy');

    // Seed default admin if none
    const count = await AdminUser.countDocuments();
    if (count === 0) {
      const passwordHash = await bcrypt.hash('admin123', 10);
      await AdminUser.create({
        name: 'Super Admin',
        email: 'admin@otoddy.com',
        password: passwordHash,
        role: 'SUPERADMIN',
      });
      console.log('Seeded default admin: admin@otoddy.com / admin123');
    }

    app.listen(PORT, () => {
      console.log(`API on :${PORT}`);
    });
  } catch (err) {
    console.error('Failed to start server', err);
    process.exit(1);
  }
}

start();
