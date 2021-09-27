import {MigrationInterface, QueryRunner} from "typeorm";

export default class CreateProduct1632703727469 implements MigrationInterface {
    name = 'CreateProduct1632703727469'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "code" integer NOT NULL, "description" character varying NOT NULL, "buyPrice" double precision NOT NULL, "sellPrice" double precision NOT NULL, "lovers" integer NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "update_At" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_99c39b067cfa73c783f0fc49a61" UNIQUE ("code"), CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "class" DROP COLUMN "updated_At"`);
        await queryRunner.query(`ALTER TABLE "class" ADD "update_At" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "class" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "class" ADD "name" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "class" ADD CONSTRAINT "UQ_574dd394846fb85d495d0f77dfd" UNIQUE ("name")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "class" DROP CONSTRAINT "UQ_574dd394846fb85d495d0f77dfd"`);
        await queryRunner.query(`ALTER TABLE "class" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "class" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "class" DROP COLUMN "update_At"`);
        await queryRunner.query(`ALTER TABLE "class" ADD "updated_At" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`DROP TABLE "product"`);
    }

}
