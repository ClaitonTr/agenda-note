import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DATABASE_HOST,
  port: 5432,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.APP_DATABASE,
  synchronize: true,
  logging: false,
  entities: ['dist/datasource/entity/*.js'],
  migrations: ['dist/datasource/migration/'],
  subscribers: [],
});