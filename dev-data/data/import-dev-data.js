const fs = require('fs');
const mongoose = require('mongoose');

const dotenv = require('dotenv');

const Tour = require('./../../models/tourModel');

dotenv.config({ path: './config.env' });

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

//Read JSON FILE

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8')
);

// import data into db

const importData = async () => {
  try {
    await Tour.create(tours);
    console.log('Data Successfully loaded');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// Delete the data

const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log('Data Successfully Deleted');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}

console.log(process.argv);
