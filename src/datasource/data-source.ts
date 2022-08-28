import "reflect-metadata";
import { DataSource } from "typeorm";
import { Agendamento } from "./entity/Agendamento";
import { CreateAgendamento1661482432672 } from "./migration/1661482432672-CreateAgendamento";

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: true,
  logging: false,
  entities: [Agendamento],
  migrations: [CreateAgendamento1661482432672],
  subscribers: [],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Database conectada");
  })
  .catch((error) => console.log(error));
