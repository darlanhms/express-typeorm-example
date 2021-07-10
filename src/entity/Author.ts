import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import Book from './Book';

@Entity('authors')
class Author {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @OneToMany(() => Book, book => book.author)
    books?: Array<Book>;
}

export default Author;
