import express from 'express';
import Nosql from '../src/lab/A03-Injection/no-sql-injection/user.route';
import Cmdinjection from '../src/lab/A03-Injection/command-injection/command.route';
import SqlInjection  from "../src/lab/A03-Injection/sql-injection/sqluser.route";
import XssInjection from './lab/A03-Injection/xss-injection/xss.route'
import cors from 'cors'; 
const app = express();


app.use(
  cors({
    origin: 'http://localhost:5173/',
    credentials: true,
  })
);
app.use(express.json());
app.use('/api/v1/no-sql',Nosql);
app.use('/api/v1/cmdi',Cmdinjection);
app.use('/api/v1/sqli',SqlInjection);
app.use('/api/v1/xss',XssInjection)
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});