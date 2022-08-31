import { Request, Response } from "express";
import { AppDataSource } from "../datasource/data-source";
import { Agendamento } from "../datasource/entity/Agendamento";

export async function getAgenda(request: Request, response: Response) {
  const id = +request.params.id;

  const postRepository = AppDataSource.getRepository(Agendamento);

  const agenda = await postRepository.findOneBy({ id });

  if (!agenda) {
    response.status(404).json({ msg: "Nehum registro encontrado" });
  } else {
    response.status(200).json(agenda);
  }
}
