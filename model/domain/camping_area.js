const pool = require('../low_level/database_pool');

module.exports = {
  getName: async roomName => {
    return pool.query('select * from room_name where idx=?', [roomName]);
  },
};
