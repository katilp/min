var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mariadb = require('mariadb');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var listRouter = require('./routes/list');

var app = express();

require('dotenv').config();

// Read values from the environment
const db_host = process.env.DB_HOST || 'localhost';
const db_user = process.env.DB_USER || 'mineral_user';
const db_password = process.env.DB_PASSWORD || 'exexex';

const port = process.env.PORT;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/list', listRouter);

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

  } catch (err) {
    throw err;
  } finally {
    if (conn) return conn.end();
  }
}

asyncFunction();

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
