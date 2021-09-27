import {MigrationInterface, QueryRunner} from "typeorm";

export class Createupdateat1632709186671 implements MigrationInterface {
    name = 'Createupdateat1632709186671'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "class" RENAME COLUMN "update_At" TO "updated_At"`);
        await queryRunner.query(`ALTER TABLE "product" RENAME COLUMN "update_At" TO "updated_At"`);
        await queryRunner.query(`ALTER TABLE "content" RENAME COLUMN "update_At" TO "updated_At"`);
        await queryRunner.query(`ALTER TABLE "lesson" RENAME COLUMN "update_At" TO "updated_At"`);
        await queryRunner.query(`ALTER TABLE "student" RENAME COLUMN "update_At" TO "updated_At"`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "update_At"`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "purchasesUpdate_at"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "updated_At" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "client" ADD "purchasesUpdated_at" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "purchasesUpdated_at"`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "updated_At"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "purchasesUpdate_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "client" ADD "update_At" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "student" RENAME COLUMN "updated_At" TO "update_At"`);
        await queryRunner.query(`ALTER TABLE "lesson" RENAME COLUMN "updated_At" TO "update_At"`);
        await queryRunner.query(`ALTER TABLE "content" RENAME COLUMN "updated_At" TO "update_At"`);
        await queryRunner.query(`ALTER TABLE "product" RENAME COLUMN "updated_At" TO "update_At"`);
        await queryRunner.query(`ALTER TABLE "class" RENAME COLUMN "updated_At" TO "update_At"`);
    }

}
