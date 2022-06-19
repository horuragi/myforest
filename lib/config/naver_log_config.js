require('dotenv').config({ path: '.env.naver_login' });

module.exports = {
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    callback_uri: process.env.CALLBACK_URI
}