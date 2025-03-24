import express from "express";
import {
  createTour,
  createToursInBulk,
  updateTour,
  deleteTour,
  getSingleTour,
  getAllTour,
  getTourBySearch,
  getFeaturedTour,
  getTourCount
} from "../controllers/tourController.js";
//import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// create new tour
router.post("/",  createTour);

// Bulk tour creation
router.post("/bulk", createToursInBulk);  // <-- This is the new route for bulk creation

// update new tour
router.put("/:id",  updateTour);

// delete tour
router.delete("/:id",  deleteTour);

// get single tour
router.get("/:id", getSingleTour);

// get all tours
router.get("/", getAllTour);

// get tour by search
router.get("/search/getTourBySearch", getTourBySearch);
router.get("/search/getFeaturedTours", getFeaturedTour);
router.get("/search/getTourCount", getTourCount);

export default router;
