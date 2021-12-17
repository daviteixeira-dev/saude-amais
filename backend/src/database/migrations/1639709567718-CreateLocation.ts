import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateLocation1639709567718 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "location",
          columns: [
            {
              name: "id",
              type: "uuid",
              isPrimary: true,
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
              name: "cep",
              type: "varchar",
            },
            {
              name: "hood",
              type: "varchar",
            },
            {
              name: "street",
              type: "varchar",
            },
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("location");
    }

}
