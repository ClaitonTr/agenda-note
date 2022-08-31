import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm"

@Entity()
export class Agendamento {

    @PrimaryGeneratedColumn()
    id: number

    @Column({name: 'nome'})
    nome: string

    @Column({name: 'departamento'})
    departamento: string

    @Column({name: 'dataagendamento'})
    dataRetirada: string

    @Column({name: 'horainicial'})
    horaInicial: string

    @Column({name: 'horafinal'})
    horaFinal: string

    @CreateDateColumn({name: 'criadoem'})
    criadoEm: Date
}
