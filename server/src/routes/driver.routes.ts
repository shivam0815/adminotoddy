// src/routes/driver.routes.ts
import { Router } from 'express';
import { listDrivers } from '../controllers/driver.controller';

const router = Router();

router.get('/', listDrivers);

export default router;
