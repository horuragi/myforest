const mysql = require('./mysql');
const multer = require('multer');
const uploadPath = 'camp_image';
const picture_storage = multer.diskStorage({
  destination: `public/${uploadPath}`,
  filename: function (req, file, cb) {
    const fileName = file.originalname;
    const sql = 'update camping_image set url=? where name=?';
    const handler = function (req, res) {
      cb(null, fileName);
    };
    const errhandler = function (res, err) {
      throw err;
    };

    mysql.put(sql, [`/${uploadPath}/${fileName}`, 'info_map'], req, '', handler, errhandler);
  },
});

var picture_upload = multer({
  storage: picture_storage,
  onError: function (err, next) {
    console.log('error', err);
    next(err);
  },
});

module.exports = (function () {
  const camping_image = {};

  camping_image.get = function (req, res, handler, errhandler) {
    const name = req.params.image_name || '';
    const sql = `select url from camping_image where name='${name}'`;
    mysql.zero_get(sql, req, res, handler, errhandler);
  };

  camping_image.pic_update = function () {
    return picture_upload;
  };

  return camping_image;
})();
