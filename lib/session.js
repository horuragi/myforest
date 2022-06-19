var credential = require('./config/db_credential');
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);

module.exports = (function(){
    return session({
        secret: 'MYFOREST@DEV!@#$',
        resave: false,
        saveUninitialized: true,
        store:new MySQLStore({
         host: credential.host,
         port: credential.port,
         user: credential.user,
         password: credential.password,
         database: credential.database
        })
    });
})();