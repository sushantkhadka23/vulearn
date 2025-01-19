import express from 'express';
import cookieParser from 'cookie-parser';
const app=express()
app.use(cookieParser());
import { sendCookie} from './xss.controller';
const router = express.Router();

router.get('/send-cookie', sendCookie as any);

export default router;