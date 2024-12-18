import { Pool } from 'pg';
import dotenv from 'dotenv';


dotenv.config();

const connectionString: string = process.env.SQL_URL as string;

const pool = new Pool({
  connectionString: connectionString
});

export default pool;
