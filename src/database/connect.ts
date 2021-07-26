/* eslint-disable no-use-before-define */
import { createConnection } from 'typeorm';

const connectToDB = async (): Promise<void> => {
    try {
        await createConnection();
        console.log('connected successfully');
    } catch (error) {
        console.error(`an error occured: ${error.message}`);
        console.error('retrying connection in 3 seconds...');
        await retryInSeconds();
    }
};

async function retryInSeconds(): Promise<void> {
    return new Promise(resolve => {
        setTimeout(async () => {
            resolve(await connectToDB());
        }, 3000);
    });
}

export default connectToDB;
