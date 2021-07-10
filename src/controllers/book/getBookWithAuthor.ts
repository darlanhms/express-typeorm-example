import { getRepository } from 'typeorm';
import Book from '../../entity/Book';

export default async function getBookWithAuthor(id: string): Promise<Book | undefined> {
    const book = await getRepository(Book).findOne(id, {
        relations: ['author'],
    });

    return book;
}
