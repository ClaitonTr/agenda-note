import { Request, Response } from "express";
import moment from "moment";
import { AppDataSource } from "../datasource/data-source";
import { Agendamento } from "../datasource/entity/Agendamento";

export async function editAgenda(request: Request, response: Response) {
  const id = +request.params.id;
  const { nome, departamento, data, horai, horaf } = request.body;

  const agendamentoRepository = AppDataSource.getRepository(Agendamento);

  const agendamento = await agendamentoRepository.findOneBy({ id });
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

  response.status(200).json({ msg: "Agendamento atualizado" });
}
