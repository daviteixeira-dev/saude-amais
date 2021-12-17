import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUser1639615342164 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "user",
        columns: [
          {
            name: "id_user",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "lastname",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "email",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "password",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "cpf",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "birth_date",
            type: "date",
            isNullable: false,

          },
          {
            name: 'type',
            type: 'enum',
            enum: ['student', 'teacher', 'admin'],
            isNullable: true,
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
            referencedColumnNames: ["id_location"],
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("user");
  }
}
