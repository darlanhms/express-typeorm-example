import { getRepository } from 'typeorm';
import Author from '../../entity/Author';

export default async function getAuthor(id: string): Promise<Author | undefined> {
    return getRepository(Author).findOne(id);
}
