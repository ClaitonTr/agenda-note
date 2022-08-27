import express, { Express } from "express";
import cors from "cors";
import "reflect-metadata";
import helmet from "helmet";
import routes from './routes'

const app: Express = express();

const options: cors.CorsOptions = {
  credentials: true,
  methods: "GET,POST,PUT,DELETE",
  origin: "*",
  optionsSuccessStatus: 200,
};

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(options));
app.use(helmet());
app.use(routes);

export default app;
