/*import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSystemUser1640280045413 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "system_user",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "lastname",
                        type: "varchar",
                    },
                    {
                        name: "email",
                        type: "varchar",

                    },
                    {
                        name: "password",
                        type: "varchar",
                    },
                    {
                        name: "cpf",
                        type: "varchar",
                    },
                    {
                        name: "birth_data",
                        type: "date",

                    },
                    {
                        name: "adress",
                        type: "varchar",
                    },
                    {
                        name: 'type',
                        type: 'enum',
                        enum: ['student', 'teacher', 'admin'],
                    },

                    {
                        name: 'id_location',
                        type: 'uuid',
                    },

                ],


            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("system_user");
    }

}
*/