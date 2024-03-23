import { MigrationInterface, QueryRunner } from 'typeorm';

export class PublicItems1711214287126 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('UPDATE item SET public=1');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
