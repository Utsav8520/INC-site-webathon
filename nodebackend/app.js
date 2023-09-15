const express = require('express');
const app = express();
const path = require('path');
// const cookiesParser = require('cookie-parser');
// const bodyParser = require('body-parser');
// const AppError = require('./utils/appError');
// const globalErrorHandler = require('./controller/ErrorHandler');
// const rateLimit = require('express-rate-limit');

// router
const viewRouter = require('./router/viewRouter');
const userRouter = require('./router/userRouter');

app.set('view engine', 'pug');  // defines which DOM element is used --pug
app.set('views', path.join(__dirname, 'views'));  // defines where the DOM element is located --pug
app.use(express.static(path.join(__dirname, 'public')));    // defines where the styling and js fies is located

app.use(express.json({ limit: '10kb' })); // defines how much data can we take at a time
app.use(express.urlencoded({ extended: false }));

app.use('/', viewRouter);
app.use('/api/v1/user', userRouter);
// app.use('/adminPannel', adminRotuer);
// app.use('/api/v1/product', apiRouter);

// app.all('*', (req, res, next) => {
//     next(new AppError(`cannot find ${req.originalUrl} on this server`, 404));
// });

module.exports = app;