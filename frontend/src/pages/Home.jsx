import React from "react";
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/lake_louise.JPG";
import heroImg02 from "../assets/images/magic_kingdom.JPG";
import heroImg03 from "../assets/images/lake_alberta.JPG";
import worldImage from "../assets/images/world.png"
import Subtitle from "../shared/Subtitle";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";

// import Newsletter from "../shared/Newsletter";

const Home = () => {
  return (
    <>
      {/*========= hero section start===========*/}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={'Tenha Uma Experiencia Unica'}/>
                  <img src={worldImage} alt="" />
                </div>
                <h1>Viajar abre portas para criar <span 
                className="highlight"> memorias</span> </h1>
                <p>Viajar permite descobrir novos lugares, 
                  experimentar culturas distintas e criar memórias
                   inesquecíveis. Cada destino guarda histórias
                   únicas e momentos especiais. Ao explorar o
                   mundo, nos conectamos com pessoas, aprendemos
                   lições valiosas e vivemos experiências que
                   transformam nossas vidas. Seja admirando paisagens
                   deslumbrantes, saboreando culinárias diferentes ou
                   se perdendo em ruas históricas, viajar enriquece
                   a alma e amplia horizontes. Cada jornada é uma
                   oportunidade de viver o presente, sonhar com o futuro
                   e valorizar as lembranças que levaremos para sempre conosco.
                </p>
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box mt-4">
                <img src={heroImg03} alt="" />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
            {/* <SearchBar /> */}
          </Row>
        </Container>
      </section>

      {/*========= hero section end===========*/}
      {/*============ featured tour section start ==============*/}
      <section>
        <Container>
          <Row>
            <Col lg='12' className="mb-5">
              <Subtitle subtitle={'Explore'}/>
              <h2 className="featured__tour-title">Alguns dos nossos descontos</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/*============ featured tour section end ===========*/}
      {/* <Newsletter /> */}
    </>
  );
};

export default Home;
