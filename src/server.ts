import app from './app';
import connectToDB from './database/connect';

connectToDB();

app.listen(process.env.PORT, () => console.log(`server listening on port ${process.env.PORT}`));
