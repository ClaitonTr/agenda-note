import { Request, Response } from "express";
import { AppDataSource } from "../datasource/data-source";
import { Agendamento } from "../datasource/entity/Agendamento";

export async function getAgendas(request: Request, response: Response) {

    const postRepository = AppDataSource.getRepository(Agendamento);

    const agendas = await postRepository.find();

    if (agendas.length < 1) {
        response.status(404).send('Nehum registro encontrado');
    }else {
        response.status(200).send(agendas);
    }
    
}