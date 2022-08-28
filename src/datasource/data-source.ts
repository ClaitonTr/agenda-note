import "reflect-metadata";
import { DataSource } from "typeorm";
import { Agendamento } from "./entity/Agendamento";

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: true,
  logging: false,
  entities: [Agendamento],
  migrations: ['src/datasource/migration/'],
  subscribers: [],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Database conectada");
  })
  .catch((error) => console.log(error));
