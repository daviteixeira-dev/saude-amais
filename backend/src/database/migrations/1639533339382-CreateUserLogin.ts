import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUserLogin1639533339382 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "userlogin",
        columns: [
          {
            name: "id_userlogin",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "username",
            type: "varchar(50)",
            isNullable: false,
          },
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("user_login");
  }

}
