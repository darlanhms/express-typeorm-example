import { getRepository } from 'typeorm';
import Author from '../../entity/Author';

export default async function getAuthors(): Promise<Array<Author>> {
    return getRepository(Author).find();
}
