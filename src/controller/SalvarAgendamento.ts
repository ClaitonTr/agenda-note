import { Request, Response } from "express";
import moment from "moment";
import { Between } from "typeorm";
import { AppDataSource } from "../datasource/data-source";
import { Agendamento } from "../datasource/entity/Agendamento";

export async function salvarAgenda(request: Request, response: Response) {
  const agendamentoRepository = AppDataSource.getRepository(Agendamento);

  const { nome, departamento, data, horai, horaf } = request.body;

  const agendamento = new Agendamento();
  agendamento.nome = nome;
  agendamento.departamento = departamento;
  agendamento.dataRetirada = data;
  agendamento.horaInicial = horai;
  agendamento.horaFinal = horaf;

  const agenda = await agendamentoRepository.findBy({
    dataRetirada: data,
  });

  const inicio = moment(horai, "hh:mm");
  const final = moment(horaf, "hh:mm");

  const existe = agenda.some((x) => {
    const inicioExistente = moment(x.horaInicial, "hh:mm");
    const finalExistente = moment(x.horaFinal, "hh:mm");
    return (
      inicio.isBetween(inicioExistente, finalExistente) ||
      final.isBetween(inicioExistente, finalExistente)
    );
  });

  if (existe) {
    return response.status(400).json({ msg: "Conflito de horários" });
  }

  agendamentoRepository.save(agendamento);

  response.status(201).json({ msg: "O notebook foi agendado" });
}
