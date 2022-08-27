import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateAgendamento1661482432672 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "agendamento",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                    },
                    {
                        name: "nome",
                        type: "varchar",
                    },
                    {
                        name: "departamento",
                        type: "varchar",
                    },
                    {
                        name: "dataagendamento",
                        type: "date",
                    },
                    {
                        name: "horainicial",
                        type: "time",
                    },
                    {
                        name: "horafinal",
                        type: "time",
                    },
                    {
                        name: "criadoem",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
            }),
            true,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("agendamento")
    }

}
