import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateClient1632705130299 implements MigrationInterface {
    name = 'CreateClient1632705130299'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "client" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "buyLast" TIMESTAMP NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "update_At" TIMESTAMP NOT NULL DEFAULT now(), "purchasesId" uuid NOT NULL DEFAULT uuid_generate_v4(), "purchasesCode" integer NOT NULL, "purchasesDescription" character varying NOT NULL, "purchasesBuyprice" double precision NOT NULL, "purchasesSellprice" double precision NOT NULL, "purchasesLovers" integer NOT NULL, "purchasesCreated_at" TIMESTAMP NOT NULL DEFAULT now(), "purchasesUpdate_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_f715d2bc3484c093807d7ebc1cb" UNIQUE ("purchasesCode"), CONSTRAINT "PK_5928c23731245eeff3e263c3b98" PRIMARY KEY ("id", "purchasesId"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "client"`);
    }

}
