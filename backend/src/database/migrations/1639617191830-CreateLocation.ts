import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateLocation1639617191830 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "location",
        columns: [
          {
            name: "id_location",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "city",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "uf",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "cep",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "hood",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "street",
            type: "varchar",
            isNullable: false,
          },
        ]
      })
    )
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("location");
  }
}
