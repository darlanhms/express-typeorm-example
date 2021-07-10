const isProd = process.env.NODE_ENV ? process.env.NODE_ENV === 'production' : false;
const rootDir = isProd ? 'dist' : 'src';

module.exports = {
    name: 'default',
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    dropSchema: false,
    username: 'postgres',
    username: 'postgres',
    password: 'postgres',
    database: process.env.DB_NAME || 'sample-database',
    entities: [`${rootDir}/entity/**/*.**`],
    migrations: [`${rootDir}/migration/**/*.**`],
    subscribers: [`${rootDir}}/subscriber/**/*.**`],
    cli: {
        migrationsDir: `${rootDir}/migration`,
    },
};
