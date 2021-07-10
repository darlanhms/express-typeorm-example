import { Router } from 'express';

import authorsRouter from './authors';
import booksRouter from './books';

const router = Router();

router.use('/books', booksRouter);
router.use('/authors', authorsRouter);

export default router;
