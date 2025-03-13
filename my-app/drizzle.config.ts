import { defineConfig } from 'drizzle-kit';
import { config } from "dotenv";
config({ path: "../my-app/.env.local" }); // Load the .env file

export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
