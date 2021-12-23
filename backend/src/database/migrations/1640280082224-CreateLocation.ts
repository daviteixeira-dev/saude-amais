/*import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateLocation1640280082224 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "location",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                    },
                    {
                        name: "city",
                        type: "varchar",
                    },
                    {
                        name: "uf",
                        type: "varchar",
                    },
                    {
                        name: "varchar",
                        type: "varchar",

                    },
                    {
                        name: "cep",
                        type: "varchar",
                    },
                    {
                        name: "hood",
                        type: "varchar",
                    },
                    {
                        name: "street",
                        type: "date",

                    },

                ],
            })
        )
    }



    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("location");
    }

}
*/