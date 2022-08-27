import { Router, Request, Response } from "express";
import { deleteAgenda } from "../controller/DeleteAgenda";
import { editAgenda } from "../controller/EditAgenda";
import { getAgenda } from "../controller/GetAgenda";
import { getAgendas } from "../controller/GetAgendas";
import { salvarAgenda } from "../controller/SalvarAgendamento";
import { AppDataSource } from "../datasource/data-source";
import { Agendamento } from "../datasource/entity/Agendamento";

const agendaRouter = Router();
const agendamentoRepository = AppDataSource.getRepository(Agendamento);

agendaRouter.get('/todos', (req: Request, res: Response) => getAgendas(req, res));

agendaRouter.post('/agendamento', (req: Request, res: Response) => salvarAgenda(req, res));

agendaRouter.get('/agendamento/:id', (req: Request, res: Response) => getAgenda(req, res));

agendaRouter.put('/agendamento/:id', (req: Request, res: Response) => editAgenda(req, res));

agendaRouter.delete('/agendamento/:id', (req: Request, res: Response) => deleteAgenda(req, res));

export default agendaRouter;