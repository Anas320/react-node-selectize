const mongoose = require('mongoose');

const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');

dotenv.config({ path: './config.env' });
//console.log(process.env);
const DB = process.env.DATABASE_LOCAL;
//const DB = process.env.DATABASE.replace(
//'<PASSWORD>',
//process.env.DATABASE_PASSWORD
//);
mongoose
  .connect('mongodb://localhost:27017/natours', {
    useNewUrlParser: true
  })
  .then(con => {
    //console.log(con.connections);
    console.log('DB successfully connected');
  });

// mongoose
//   .connect(DB, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false
//   })
//   .then(con => {
//     console.log(con.connections);
//     console.log('DB connection successful!');
//   });

const port = process.env.PORT || 31962;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
