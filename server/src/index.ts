import express from 'express';
import Nosql from './A03-Injection/no-sql-injection/user.route';
import Cmdinjection from './A03-Injection/command-injection/command-route'
import cors from 'cors'; 
const app = express();

app.use(
  cors({
    origin: '*',
    credentials: true,
  })
);
app.use(express.json());
app.use('/api/v1/no-sql',Nosql);
app.use('/api/v1/cmdi',Cmdinjection)
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
