var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var todosRouter = require('./routes/todos');

var app = express();

// connect to db
const user = process.env.MONGO_USER;
const mongoPort = process.env.MONGO_PORT || 27017;
const mongoHost = process.env.MONGO_HOST || 'localhost';
const auth = user ? `${user}:${process.env.MONGO_PASS}@` : '';
const DB_STRING = `mongodb://${auth}${mongoHost}:${mongoPort}/todos`;

console.log(`Running node ${process.version}...`);
console.log(`Connecting to DB... ${DB_STRING}`);

const config = { useNewUrlParser: true, useUnifiedTopology: true};
mongoose.connect(DB_STRING, config)
  .then(() => console.log(`Connected!`))
  .catch(console.error);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/todos', todosRouter);

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
