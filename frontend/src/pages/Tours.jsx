
import React, { useState } from "react";
import "../styles/tour.css";
import TourCard from "./../shared/TourCard";
import SearchBar from "./../shared/SearchBar";
import { Container, Row, Col } from "reactstrap";
import tours from "../data/tours"; // Import local tours data

const Tours = () => {
  const [page, setPage] = useState(0);
  const [searchResults, setSearchResults] = useState(null); // 🔹 Stores search results
  const itemsPerPage = 8; // Set number of tours per page

  // 🔹 Compute page count based on filtered results or full data
  const paginatedTours = searchResults ?? tours;
  const pageCount = Math.ceil(paginatedTours.length / itemsPerPage);

  // Get tours for current page
  const displayedTours = paginatedTours.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

  return (
    <>
      <section>
        <Container>
          <Row>
            <SearchBar setSearchResults={setSearchResults} /> {/* Pass function to SearchBar */}
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            {displayedTours.map((tour) => (
              <Col lg="3" md="6" sm="6" className="mb-4" key={tour.id}>
                <TourCard tour={tour} />
              </Col>
            ))}

            {/* 🔹 Pagination */}
            {pageCount > 1 && (
              <Col lg="12">
                <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                  {[...Array(pageCount).keys()].map((number) => (
                    <span
                      key={number}
                      onClick={() => setPage(number)}
                      className={page === number ? "active__page" : ""}
                    >
                      {number + 1}
                    </span>
                  ))}
                </div>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Tours;
