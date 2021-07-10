import { createConnection } from 'typeorm';
import app from './app';

createConnection();

app.listen(process.env.PORT, () => console.log(`server listening on port ${process.env.PORT}`));
