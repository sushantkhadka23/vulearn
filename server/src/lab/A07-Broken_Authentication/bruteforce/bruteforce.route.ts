import express from 'express';
import {  loginUser,getlist} from './bruteforce.controlller';

const router = express.Router();

router.post('/login', loginUser as any);
router.get('/list', getlist as any)
export default router;

