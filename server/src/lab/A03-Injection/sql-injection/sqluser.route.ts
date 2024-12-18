import { Router } from 'express';
import { createUserSchema } from './sqluser.controller';

const router = Router();


router.post('/login', createUserSchema as any);

export default router;

