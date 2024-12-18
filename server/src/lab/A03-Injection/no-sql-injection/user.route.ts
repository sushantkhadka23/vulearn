import express from 'express';
import { loginUser } from './user.controller';

const router = express.Router();

router.post('/users', loginUser as any);

export default router;
