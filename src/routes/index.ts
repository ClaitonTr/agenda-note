import express from "express";
import { Request, Response } from "express";
import agendaRouter from "./agenda.routes";

const routes = express.Router();

routes.use(agendaRouter);

routes.use("*", (req: Request, res: Response) => {
  res.sendStatus(404);
});

routes.use(async (err: any, req: Request, res: Response) => {
    res.status(err.httpStatusCode || 500).json({
        message: err.message || 'Não foi possível processar sua requisição'
    });
});

export default routes;