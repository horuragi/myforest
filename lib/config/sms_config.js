require('dotenv').config({ path: '.env.sms' });

module.exports = {
  service_id: process.env.SENS_SERVICE_ID,
  access_key: process.env.SENS_ACCESS_KEY,
  secret_key: process.env.SENS_SECRET_KEY,
  owner_phone_number: process.env.OWNER_PHONE_NUMBER,
  developer_phone_number: process.env.DEVELOPER_PHONE_NUMBER,
  domain: process.env.SENS_DOMAIN,
  message_api_url: process.env.SENS_MESSAGE_API_URL,
};
