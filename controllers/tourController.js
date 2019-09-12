const Tour = require('./../models/tourModel');

// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
// );

exports.getAllTours = async (req, res) => {
  //console.log(req.requestTime);
  try {
    console.log(req.query);
    const tours = await Tour.find(req.query);

    res.status(200).json({
      tours
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    // Tour.findOne({_id: req.params.id}) we have done a shorthand above. And this commented method is filtered method.
    res.status(200).json({
      status: 'success',
      data: {
        tour
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }

  //const id = req.params.id * 1;
  //   const tour = tours.find(el => el.id === id);
};

exports.createTour = async (req, res) => {
  //console.log(req.body)
  try {
    const newTour = await Tour.create(req.body);
    res.status(200).json({
      status: 'success',
      data: {
        tour: newTour
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: {
        error: err
      }
    });
  }

  // res.status(201).json({
  //   status: 'success'
  // data: {
  //   tour: newTour
  // }
};

exports.updateTour = async (req, res) => {
  // if (req.params.id * 1 > tours.length) {
  //     return res.status(404).json({
  //         status: "fail",
  //         message: "Invalid ID"
  //     })
  // }
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    res.status(200).json({
      status: 'success',
      data: {
        tour
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: {
        Error: err
      }
    });
  }
};
exports.deleteTour = async (req, res) => {
  // if (req.params.id * 1 > tours.length) {
  //     return res.status(404).json({
  //         status: "fail",
  //         message: "Invalid ID"
  //     })
  // }
  await Tour.findByIdAndDelete(req.params.id);
  try {
    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: {
        error: err
      }
    });
  }
};
