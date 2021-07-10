import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import Author from './Author';

@Entity('books')
class Book {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    author_id: string;

    @ManyToOne(() => Author, author => author.books)
    @JoinColumn({ name: 'author_id' })
    author?: Author;
}

export default Book;
