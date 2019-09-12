const express = require('express');
const cors = require('cors');
const app = express();
const fs = require('fs');
const morgan = require('morgan');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  console.log('Hello from the middleware');
  next();
});
app.use(cors());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});
// app.get('/', (req, res) => {
//     res.status(200).json({
//         message: 'hello from the server side',
//         app: 'natours'
//     })
// })
// app.post('/', (req, res) => {
//     res.send('you can post to this endpoint')

// })
// app.get('/api/v1/tours', getAllTours)
// app.get('/api/v1/tours/:id', getTour)
// app.post('/api/v1/tours', createTour)
// app.patch('/api/ v1/tours/:id', updateTour)
// app.delete('/api/v1/tours/:id', deleteTour)
app.use('/api/v1/tours', tourRouter); //whenever this URL is hit, the middlerware (tourRouter) will run and routers will set
app.use('/api/v1/users', userRouter); //this process is called mounting a new router

module.exports = app;
