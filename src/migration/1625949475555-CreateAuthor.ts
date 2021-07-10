import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateAuthor1625949475555 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'authors',
                columns: [
                    {
                        name: 'id',
                        isPrimary: true,
                        type: 'varchar',
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        length: '255',
                    },
                ],
            }),
            true,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('authors', true);
    }
}
