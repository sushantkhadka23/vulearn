import express from 'express';
import { fetchapi, adminsafeapi } from './ssrf.controller';

const router = express.Router();

router.get('/fetch-api',fetchapi as any);
router.get('/admin' , adminsafeapi as any)

export default router;