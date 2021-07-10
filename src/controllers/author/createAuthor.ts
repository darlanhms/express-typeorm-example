import { getRepository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import Author from '../../entity/Author';

export default function createAuthor(infos: Omit<Author, 'id'>): Promise<Author> {
    const repo = getRepository(Author);

    const author = repo.create({
        ...infos,
        id: uuid(),
    });

    return repo.save(author);
}
