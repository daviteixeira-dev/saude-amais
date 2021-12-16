import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUser1639615342164 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "user",
          columns: [
            {
              name: "id",
              type: "uuid",
              isPrimary: true,
            },
            {
              name: "cpf",
              type: "varchar",
              isNullable: false,
            },
            {
              name: "birth_data",
              type: "date",
              isNullable: false,

            },
            {
              name: "occupation",
              type: "varchar",
              isNullable: false,
            },
            {
              name: "description",
              type: "text",
              isNullable: false,
            },
            {
              name: 'type',
              type: 'enum',
              enum: ['studant', 'admin'],
              isNullable: true,
            },
            {
              name: "id_user_login",
              type: "uuid",
            },
            {
              name: "id_location",
              type: "uuid",
            },
          ],
          foreignKeys: [
            {
                name: "fk_user_login",
                columnNames: ["id_user_login"],
                referencedTableName: "user_login",
                referencedColumnNames: ["id"],
            },
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
      await queryRunner.dropTable("user");
    }

}
