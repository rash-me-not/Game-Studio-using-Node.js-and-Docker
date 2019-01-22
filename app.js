var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

/* Define the routes */
var indexRouter = require('./routes/index');
var registerRouter = require('./routes/register');
var registerActionRouter = require('./routes/registerAction');
var gamereleaseRouter = require('./routes/game_release');
var aboutRouter = require('./routes/about');
var loginRouter = require('./routes/login');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* Mount the directories for bootstrap and jquery */
app.use(express.static(path.join(__dirname + '/node_modules/bootstrap/dist')));
app.use(express.static(path.join(__dirname + '/node_modules/jquery/dist')));
app.use(express.static(path.join(__dirname + '/node_modules/bootstrap/dist')));


app.use('/', indexRouter);
app.use('/register', registerRouter);
app.use('/about', aboutRouter);
app.use('/game_release', gamereleaseRouter);
app.use('/registerAction', registerActionRouter);
app.use('/login', loginRouter);

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
