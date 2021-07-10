import { Router } from 'express';

import createBook from '../controllers/book/createBook';
import getBooks from '../controllers/book/getBooks';
import getBook from '../controllers/book/getBook';
import getBookWithAuthor from '../controllers/book/getBookWithAuthor';

const booksRouter = Router();

booksRouter.post('/', async (req, res) => {
    try {
        return res.json(await createBook(req.body));
    } catch (error) {
        return res.json(error.message).status(500);
    }
});

booksRouter.get('/', async (req, res) => {
    return res.json(await getBooks());
});

booksRouter.get('/:id', async (req, res) => {
    return res.json(await getBook(req.params.id));
});

booksRouter.get('/:id/author', async (req, res) => {
    return res.json(await getBookWithAuthor(req.params.id));
});

export default booksRouter;
