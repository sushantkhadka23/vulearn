const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const connectToDatabase = async () => {
    await client.connect();
};



module.exports = connectToDatabase;
