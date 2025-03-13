// Make sure to install the 'pg' package
import { drizzle } from "drizzle-orm/node-postgres";
import { config } from "dotenv";
import { Pool } from "pg";
config({ path: "my-app/.env.local" }); // Load the .env file

if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined");
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL!,
});

export const db = drizzle({ client: pool });

