// src/routes/rides.routes.ts
import { Router } from 'express';
import { listRides } from '../controllers/rides.controller';

const router = Router();

router.get('/', listRides);

export default router;
