import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSystemUser1639834110317 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "system_user",
              columns: [
                {
                  name: "id_users",
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
              ],
            })
          )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("system_user");
    }

}
