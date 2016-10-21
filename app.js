// var express = require('express');
// var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');

// var routes = require('./routes/index');
// var users = require('./routes/users');

// var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// // uncomment after placing your favicon in /public
// //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', routes);
// app.use('/users', users);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// // error handlers

// // development error handler
// // will print stacktrace
// if (app.get('env') === 'development') {
//   app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//       message: err.message,
//       error: err
//     });
//   });
// }

// // production error handler
// // no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.render('error', {
//     message: err.message,
//     error: {}
//   });
// });


// module.exports = app;
var express = require('express')
, load = require('express-load')
, cookieParser = require('cookie-parser')
, session = require('express-session')
, bodyParser = require('body-parser')
, methodOverride = require('method-override');
var app = express();


var sess = {
 secret: 'keyboard cat',
 cookie: {},
 resave: true,
 saveUninitialized: true
}
app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(session(sess));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('X-HTTP-Method-Override'));
// app.use(app.route());
app.use(express.static(__dirname+'/public'));

load('models')
    .then('controllers')
    .then('routes')
    .into(app);
// app.get('/', routes.index);
// app.get('/usuarios', routes.user.index);

app.listen(3000, function(){
  console.log("Ntalk no ar.");
});