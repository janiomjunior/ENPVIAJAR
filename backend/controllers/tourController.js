import Tour from "../models/Tour.js";

//create new tour
export const createTour = async (req, res) => {
  const newTour = new Tour(req.body);

  try {
    const savedTour = await newTour.save();

    res.status(200).json({
      sucess: true,
      message: "Succesfully created",
      data: savedTour,
    });
  } catch (err) {
    res.status(500).json({
      sucess: false,
      message: "Failed to create. Try again",
    });
  }
};

// Create tours in bulk
export const createToursInBulk = async (req, res) => {
  const toursData = req.body;  // Assuming this is an array of tour objects

  try {
    // Insert multiple tours at once using insertMany
    const savedTours = await Tour.insertMany(toursData);

    res.status(200).json({
      success: true,
      message: "Successfully created multiple tours",
      data: savedTours,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to create multiple tours. Try again.",
      error: err.message,
    });
  }
};

//update tour
export const updateTour = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedTour = await Tour.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({
      sucess: true,
      message: "Succesfully updated",
      data: updatedTour,
    });
  } catch (err) {
    res.status(500).json({
      sucess: false,
      message: "failed to update",
    });
  }
};

//delete tour
export const deleteTour = async (req, res) => {
  const id = req.params.id;

  try {
    await Tour.findByIdAndDelete(id);

    res.status(200).json({
      sucess: true,
      message: "Succesfully deleted",
    });
  } catch (err) {
    res.status(500).json({
      sucess: false,
      message: "failed to delete",
    });
  }
};

//getSingle tour
export const getSingleTour = async (req, res) => {
  const id = req.params.id;

  try {
    const tour = await Tour.findById(id);

    res.status(200).json({
      sucess: true,
      message: "Succesfully retrieved",
      data: tour,
    });
  } catch (err) {
    res.status(404).json({
      sucess: false,
      message: "not found",
    });
  }
};

//getAll tour
export const getAllTour = async (req, res) => {
  //for pagination
  const page = parseInt(req.query.page);

  try {
    const tours = await Tour.find({})
      // .populate("reviews")
      .skip(page * 8)
      // .limit(8);

    res.status(200).json({
      sucess: true,
      count: tours.length,
      message: "Succesful",
      data: tours,
    });
  } catch (err) {
    res.status(404).json({
      sucess: false,
      message: "not found",
    });
  }
};

// // get tour by search
// export const getTourBySearch = async (req, res) => {
//   // here 'i' means case sensitive
//   const location = new RegExp(req.query.location);
//   const title = new RegExp(req.query.title);
//   //const maxGroupSize = parseInt(req.query.maxGroupSize);

//   try {
//     const tours = await Tour.find({
//       location,
//       title
//     });

//     res.status(200).json({
//       sucess: true,
//       message: "Succesful",
//       data: tours,
//     });
//   } catch (e) {
//     res.status(404).json({
//       sucess: false,
//       message: "not found",
//     });
//   }
// };

// get tour by search
export const getTourBySearch = async (req, res) => {
  const title = new RegExp(req.query.title, "i"); // Case-insensitive search

  try {
    const tours = await Tour.find({ title });

    res.status(200).json({
      success: true,
      message: "Successful",
      data: tours,
    });
  } catch (e) {
    res.status(404).json({
      success: false,
      message: "Not found",
    });
  }
};




//get featured tour
export const getFeaturedTour = async (req, res) => {
  try {
    const tours = await Tour.find({ featured: true });

    res.status(200).json({
      sucess: true,
      message: "Succesful",
      data: tours,
    });
  } catch (err) {
    res.status(404).json({
      sucess: false,
      message: "not found",
    });
  }
};

//get tour counts

export const getTourCount = async (req, res) => {
  try {
    const tourCount = await Tour.estimatedDocumentCount();

    res.status(200).json({ success: true, data: tourCount });
  } catch (err) {
    res.status(500).json({ sucess: false, message: "failed to fetch" });
  }
};
