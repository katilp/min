var express = require('express');
var router = express.Router();
var mariadb = require('mariadb');

/* GET users listing. */
router.get('/', function(req, res, next) {
  
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
  
  async function asyncFunction() {
    let conn;
    try {
      conn = await pool.getConnection();
      const rows = await conn.query("SELECT * FROM tableName");
      console.log(rows); //[ {val: 1}, meta: ... ]
      return rows;
    } catch (err) {
      throw err;
    } finally {
      if (conn) return conn.end();
    }
  }
  
  //console.log(asyncFunction());
  
  //res.send(asyncFunction())
  res.render('list', { list: asyncFunction() });

});

function listall() {
  return 'listing';
}

module.exports = router;
