import { getRepository } from 'typeorm';
import Author from '../../entity/Author';

export default async function getAuthorWithBooks(id: string): Promise<Author | undefined> {
    return getRepository(Author).findOne(id, {
        relations: ['books'],
    });
}
