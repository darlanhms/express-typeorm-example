import { getRepository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import Book from '../../entity/Book';

export default async function createBook(infos: Omit<Book, 'id'>): Promise<Book> {
    const repo = getRepository(Book);

    const book = repo.create({
        ...infos,
        id: uuid(),
    });

    return repo.save(book);
}
