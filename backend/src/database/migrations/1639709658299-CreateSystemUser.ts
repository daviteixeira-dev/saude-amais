import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSystemUser1639709658299 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "system_user",
          columns: [
            {
              name: "id",
              type: "uuid",
              isPrimary: true,
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
              name: 'type',
              type: 'enum',
              enum: ['studant', 'admin'],
            },
            {
              name: "id_location",
              type: "uuid",
            },
          ],
          foreignKeys: [
            {
              name: "fk_location",
              columnNames: ["id_location"],
              referencedTableName: "location",
              referencedColumnNames: ["id"],
            }
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("system_user");
    }

}
