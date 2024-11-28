import express from 'express';
import { execCmd } from './command.controller';

const router = express.Router();

router.get('/cmd',execCmd as any);

export default router;