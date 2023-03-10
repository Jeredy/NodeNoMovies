import { DataSource } from "typeorm";
import "dotenv/config";

export const myDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ["src/**/*.entity{.ts,.js}"],
  migrations: ["src/database/migrations/*.ts"],
  migrationsTableName: "migrations",
  logging: false,
  synchronize: false,
});
