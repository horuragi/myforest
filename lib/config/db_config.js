var credential = require('./db_credential');

module.exports = (function(){
    var db_config = {};

    db_config.getConfig = function(schema_name){
        return {
            host : credential.host,
            user : credential.user,
            password : credential.password,
            port : credential.port,
            database : schema_name || credential.database,
            connectionLimit : 10,
            waitForConnections: true,
            multipleStatements: true
        };  
    }

    return db_config;
})();