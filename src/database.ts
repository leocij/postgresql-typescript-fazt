import { Pool } from 'pg'

export const pool =  new Pool({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'postgres',
  database: 'postgresql_typescript_fazt_db'
})