import React from "react";
import "./footer.css";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import { Link } from "react-router-dom";
import logo from "../../assets/images/ENVP_logo_2.jpg";

const quick__links = [
  {
    path: "/home",
    display: "Inicio",
  },

  {
    path: "/about",
    display: "Sobre",
  },

  {
    path: "/tours",
    display: "Descontos",
  },
];

// const quick__links2 = [
//   {
//     path: "/gallery",
//     display: "Gallery",
//   },

//   {
//     path: "/login",
//     display: "Login",
//   },

//   {
//     path: "/register",
//     display: "Register",
//   },
// ];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              <img src={logo} alt="" />

              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <span>
                    <a
                      href="https://www.youtube.com/eunascipraviajar"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="ri-youtube-line"></i>
                    </a>
                  </span>
                </span>
                {/* <span>
                  <Link to="#">
                    <i className="ri-github-fill"></i>
                  </Link>
                </span> */}
                <span>
                  <a
                    href="https://www.facebook.com/eunascipraviajar/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="ri-facebook-circle-fill"></i>
                  </a>
                </span>
                <span>
                  <a
                    href="https://www.instagram.com/eunascipraviajar/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="ri-instagram-fill"></i>
                  </a>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="3">
            <h5 className="footer__link-title">Descubra</h5>

            <ListGroup className="footer__quick-links">
              {quick__links.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          {/* <Col lg="3">
            <h5 className="footer__link-title">Quick Links</h5>

            <ListGroup className="footer__quick-links">
              {quick__links2.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col> */}
          <Col lg="3">
            <h5 className="footer__link-title">Contato</h5>

            <ListGroup className="footer__quick-links">
              <ListGroupItem
                className="ps-0 border-0 d-flex
                align-items-center gap-3"
              >
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-map-pin-line"></i>
                  </span>
                  Endereço:
                </h6>

                <p className="mb-0">Natal, Brazil</p>
              </ListGroupItem>
              <ListGroupItem
                className="ps-0 border-0 d-flex
                align-items-center gap-3"
              >
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-mail-line"></i>
                  </span>
                  Email:
                </h6>

                <p className="mb-0">eunascipraviajar@gmail.com</p>
              </ListGroupItem>
              <ListGroupItem
                className="ps-0 border-0 d-flex
                align-items-center gap-3"
              >
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-phone-line"></i>
                  </span>
                  Fone:
                </h6>

                <p className="mb-0">84-98807-2415</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="12" className="text-center pt-5">
            <p className="copyright">
              Copyright {year}, designed and developed by Janio Mendonca. All
              rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
