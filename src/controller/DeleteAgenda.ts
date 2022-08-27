import { Request, Response } from "express";
import { AppDataSource } from "../datasource/data-source";
import { Agendamento } from "../datasource/entity/Agendamento";

export async function deleteAgenda(request: Request, response: Response) {

    const id = +request.params.id;

    const agendamentoRepository = AppDataSource.getRepository(Agendamento);

    const agendamento = await agendamentoRepository.findOneBy({id});

    agendamentoRepository.remove(agendamento);

    response.status(204).send('Agendamento deletado');
}