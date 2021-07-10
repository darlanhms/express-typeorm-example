import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateBook1625949488858 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'books',
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
                    {
                        name: 'description',
                        type: 'text',
                    },
                    {
                        name: 'author_id',
                        type: 'varchar',
                    },
                ],
            }),
            true,
        );

        await queryRunner.createForeignKey(
            'books',
            new TableForeignKey({
                name: 'BookAuthor',
                columnNames: ['author_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'authors',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('books', 'BookAuthor');

        await queryRunner.dropTable('books', true);
    }
}
