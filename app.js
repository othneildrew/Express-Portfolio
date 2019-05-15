const createError = require('http-errors');
const express = require('express');

const mainRouter = require('./routes');
const projectsRouter = require('./routes/projects');

const app = express();
const port = 3000;

// view engine setup
app.set('view engine', 'pug');
app.listen(port, () => {
  console.log(`The application is running on localhost:${port}`);
});

app.use(express.urlencoded({ extended: false }));
app.use('/static', express.static('public'));

app.use('/', mainRouter);
app.use('/projects', projectsRouter);

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
