import { getRepository } from 'typeorm';
import Book from '../../entity/Book';

export default async function getBooks(): Promise<Array<Book>> {
    return getRepository(Book).find();
}
