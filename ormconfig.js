require('dotenv').config();

let dbConfig = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME
}

module.exports = {
    name: 'default',
    type: 'mysql',
    host: dbConfig?.host,
    port: dbConfig?.port ? parseInt(dbConfig?.port) : 3306,
    username: dbConfig?.username,
    password: dbConfig?.password,
    database: dbConfig?.dbName,
    entities: [],
    synchronize: true,
    dropSchema: false,
    logging: true,
    entities: ['src/**/*.entity.ts', 'dist/**/*.entity.js']
}