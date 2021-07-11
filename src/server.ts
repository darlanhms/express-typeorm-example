import { createConnection } from 'typeorm';
import app from './app';

const connectToDB = async () => {
    try {
        await createConnection();
        console.log('connected successfully');
    } catch (error) {
        console.error(`an error occured: ${error.message}`);
        console.error('retrying connection...');
        await connectToDB();
    }
};

connectToDB();

app.listen(process.env.PORT, () => console.log(`server listening on port ${process.env.PORT}`));
