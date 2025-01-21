import express from 'express';
import {  loginUser,getUserData } from './idor.controller';

const router = express.Router();

router.post('/login', loginUser as any);
router.get('/user/:id', getUserData as any);

export default router;


