import { Request, Response } from "express";
import { AppDataSource } from "../datasource/data-source";
import { Agendamento } from "../datasource/entity/Agendamento";

export async function editAgenda(request: Request, response: Response) {

    const id = +request.params.id;

    const agendamentoRepository = AppDataSource.getRepository(Agendamento);

    const agendamento = await agendamentoRepository.findOneBy({ id});
    agendamento.nome = request.body.nome;
    agendamento.departamento = request.body.departamento;
    agendamento.dataRetirada = request.body.data;
    agendamento.horaInicial = request.body.horai;
    agendamento.horaFinal = request.body.horaf;

    agendamentoRepository.save(agendamento);

    response.status(200).send('Agendamento atualizado');
}