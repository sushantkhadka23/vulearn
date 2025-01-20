import express from 'express';
import {  loginUser} from './bruteforce.controlller';

const router = express.Router();

router.post('/login', loginUser as any);
export default router;

