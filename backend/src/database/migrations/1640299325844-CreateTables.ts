import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTables1640299325844 implements MigrationInterface {
    name = 'CreateTables1640299325844'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "system_user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "lastname" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "cpf" character varying NOT NULL, "birth_date" TIMESTAMP NOT NULL, "address" character varying NOT NULL, "type" character varying NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), "locationId" uuid, CONSTRAINT "REL_935356e6561538544baa6bc2c6" UNIQUE ("locationId"), CONSTRAINT "PK_9949334be1756656fab9fac4a0c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "location" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "city" character varying NOT NULL, "uf" character varying NOT NULL, "cep" character varying NOT NULL, "hood" character varying NOT NULL, "street" character varying NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_876d7bdba03c72251ec4c2dc827" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "system_user" ADD CONSTRAINT "FK_935356e6561538544baa6bc2c61" FOREIGN KEY ("locationId") REFERENCES "location"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "system_user" DROP CONSTRAINT "FK_935356e6561538544baa6bc2c61"`);
        await queryRunner.query(`DROP TABLE "location"`);
        await queryRunner.query(`DROP TABLE "system_user"`);
    }

}
