// src/components/Featured-tours/FeaturedTourList.jsx

import React from "react";
import { Col } from "reactstrap";
import TourCard from "../../shared/TourCard";
import tours from "../../data/tours";

const FeaturedTourList = () => {
  // Filter only featured tours
  const featuredTours = tours.filter((tour) => tour.featured);

  return (
    <>
      {featuredTours.map((tour) => (
        <Col lg="3" md="6" sm="6" className="mb-4" key={tour.id}>
          <TourCard tour={tour} />
        </Col>
      ))}
    </>
  );
};

export default FeaturedTourList;

