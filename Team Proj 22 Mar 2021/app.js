var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoSanitize = require('express-mongo-sanitize');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const blogRouter = require('./routes/posts');
const packageRouter = require('./routes/package');
const contactRouter = require("./routes/contacts")
const orderRouter = require('./routes/book');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// Express Mongoose Sanitize
// Replace any prohibited characters in keys
// https://www.npmjs.com/package/express-mongo-sanitize
// Or, to replace prohibited characters with _, use:
app.use(mongoSanitize({
  replaceWith: '_'
}));

// For Passport.js
require("./my-passport").init(app);

// -------------------------------------------------------------

app.use(express.static(path.join(__dirname, 'public')));



app.use('/', indexRouter);
app.use('/register', usersRouter);
app.use('/blogs', blogRouter);
app.use('/packages', packageRouter)
app.use("/contacts", contactRouter);
app.use('/book', orderRouter);
app.post('/contact', require('./formregister').registerpost);

 
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
