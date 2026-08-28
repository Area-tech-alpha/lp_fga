import { Pool } from 'pg';

declare global {
  var _pgPool: Pool | undefined;
}

export function getPool() {
  if (!global._pgPool) {
    global._pgPool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false }
    });
  }
  return global._pgPool;
}
