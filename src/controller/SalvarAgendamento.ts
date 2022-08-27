import { Request, Response } from "express";
import { AppDataSource } from "../datasource/data-source";
import { Agendamento } from "../datasource/entity/Agendamento";

export async function salvarAgenda(request: Request, response: Response) {

    const agendamentoRepository = AppDataSource.getRepository(Agendamento);

    const agendamento = new Agendamento();
    agendamento.nome = request.body.nome;
    agendamento.departamento = request.body.departamento;
    agendamento.dataRetirada = request.body.data;
    agendamento.horaInicial = request.body.horai;
    agendamento.horaFinal = request.body.horaf;

    agendamentoRepository.save(agendamento);

    response.status(201).send('Agendamento criado');
}