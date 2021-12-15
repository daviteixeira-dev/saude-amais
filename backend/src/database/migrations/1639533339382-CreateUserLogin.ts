import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUserLogin1639533339382 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: "user_login",
          columns: [
            {
              name: "id",
              type: "uuid",
              isPrimary: true,
            },
            {
              name: "username",
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
              name: "created_at",
              type: "timestamp",
              default: "now()",
            },
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("user_login");
    }

}
