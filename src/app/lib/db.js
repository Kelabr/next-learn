import { Pool } from "pg";

export const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }, // Confirma o SSL, necessário para conexão com Neon
  });
  