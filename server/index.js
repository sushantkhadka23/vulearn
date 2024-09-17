import express from 'express'
import connectToDatabase from './config/dbconfig.js'
import dotenv from 'dotenv';

dotenv.config(); 
const app = express()
connectToDatabase();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const port =process.env.PORT;
app.listen(port, () => {
  console.log(`Example app listening on ${port} `)
})