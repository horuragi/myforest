const mysql = require('mysql2/promise');
const config = require('../../lib/config/db_config').getConfig();
config['enableKeepAlive'] = true;

const pool = mysql.createPool(config);

module.exports = {
  query: async (sql, args) => {
    const result = {
      isSuccess: false,
      data: null,
    };

    try {
      const [data] = await pool.query(sql, args);

      result.isSuccess = true;
      result.data = data;
    } catch (err) {
      result.isSuccess = false;
      result.data = err;
    }

    return result;
  },
};
