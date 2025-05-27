import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Roteiros.css';

const Roteiros = () => {
  return (
    <div className="roteiros-container">
      <h1 className="roteiros-title">Roteiros de Viagem</h1>
      <p className="roteiros-intro">
        Aqui você encontra roteiros prontos, testados e aprovados, pensados para facilitar sua viagem com o máximo de aproveitamento e economia!
      </p>

      <div className="roteiro-card">
        <h2>Gramado e Canela</h2>
        <p>
          Um roteiro imperdível com dicas exclusivas para quem assina o Prime, sugestões de transporte, hospedagem e atrações com o melhor custo-benefício. Inclui atrações como Lago Negro, SkyGlass, Snowland, Maria Fumaça e muito mais!
        </p>
        <Link to="/roteiros/gramado-canela" className="btn-roteiro">Ver Roteiro Completo</Link>
      </div>
    </div>
  );
};

export default Roteiros;