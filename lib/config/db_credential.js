require('dotenv').config({ path: '.env.db' });

module.exports = {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_ROOT_NAME,
    password: process.env.MYSQL_ROOT_PASSWORD,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DATABASE
}