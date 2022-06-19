require('dotenv').config({ path: '.env.admin' });

module.exports = (function(){
    return JSON.parse(process.env.ADMIN_LIST);
})();
