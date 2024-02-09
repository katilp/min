var express = require('express');
var router = express.Router();
var mariadb = require('mariadb');

/* GET users listing. */
router.get('/:item_id?', async function(req, res, next) {
  
  require('dotenv').config();

  // Read values from the environment
  const db_host = process.env.DB_HOST || 'localhost';
  const db_user = process.env.DB_USER || 'mineral_user';
  const db_password = process.env.DB_PASSWORD || 'exexex';

  const pool = mariadb.createPool({
    host: db_host,
    user: db_user,
    password: db_password,
    database: 'mineral_db'
  });
  
  const item_id = req.query.item_id;
  var myQueryString = ""
  if (item_id) {
    myQueryString = "SELECT * FROM tableName WHERE item_id=" + item_id
  }
  else {
    myQueryString = "SELECT * FROM tableName"
  }

  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query( myQueryString );
      res.send(rows);
  } catch (err) {
    throw err;
  } finally {
    if (conn) return conn.end();
  }

  
});

module.exports = router;
