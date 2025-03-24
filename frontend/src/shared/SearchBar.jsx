import React, { useRef } from "react";
import "./search-bar.css";
import { Col, Form, FormGroup } from "reactstrap";
import tours from "../data/tours"; // Import local tours data

const SearchBar = ({ setSearchResults }) => {
  const titleRef = useRef("");

  const searchHandler = (e) => {
    e.preventDefault();
    const title = titleRef.current.value.trim().toLowerCase();

    if (title === "") {
      setSearchResults(null); // 🔹 Reset to show all tours
      return;
    }

    // 🔹 Filter tours by title
    const filteredTours = tours.filter((tour) =>
      tour.title.toLowerCase().includes(title)
    );

    if (filteredTours.length === 0) {
      alert("No tours found!");
    }

    setSearchResults(filteredTours);
  };

  const handleInputChange = () => {
    if (titleRef.current.value.trim() === "") {
      setSearchResults(null); // 🔹 Reset to show all tours
    }
  };

  return (
    <Col lg="4">
      <div className="search__bar">
        <Form className="d-flex align-items-center gap-3" onSubmit={searchHandler}>
          <FormGroup className="d-flex gap-3 form__group form__group-fast form__group-wide">
            <span>
              <i className="ri-search-line"></i>
            </span>
            <div>
              <h6>Descontos</h6>
              <input
                type="text"
                placeholder="Digite o nome do desconto"
                ref={titleRef}
                onChange={handleInputChange} // 🔹 Detect changes
              />
            </div>
          </FormGroup>
          <button className="search__icon" type="submit">
            <i className="ri-search-line"></i>
          </button>
        </Form>
      </div>
    </Col>
  );
};

export default SearchBar;
