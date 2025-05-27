import React from 'react';
import '../styles/About.css';
//import gabyHero from '../image/gaby-hero.jpg';
import gabyProfile from '../image/gaby-profile.jpg';

const About = () => {
    return (
        <div className="about-container">
            {/* <div className="hero-section">
                <img
                    src={gabyHero}
                    alt="Gaby sorrindo viajando"
                    className = "hero-image"
                />
                <h1 className="hero-text">Eu sou a Gaby e nasci pra viajar! ✈️</h1>
            </div> */}

            <section className="about-section">
                <div className="about-profile">
                    <img
                        src={gabyProfile}
                        alt="Foto da Gaby"
                        className="profile-image"
                    />
                </div>
                <div className="about-text">
                    <h2 className="orange-title">Sobre mim</h2>
                    <p>
                        Oi! Eu sou a Gaby, criadora do blog <strong>Eu Nasci Pra Viajar</strong>. Aqui compartilho histórias,
                        dicas sinceras e inspiração pra quem também tem alma viajante.
                    </p>
                </div>
            </section>
        

            {/* <section className="timeline-section">
                <h2 className="orange-title">Linha do tempo</h2>
                <ul className="timeline-list">
                    <li><span className="year-icon">🌍</span><strong>2018</strong> – Primeira viagem internacional</li>
                    <li><span className="year-icon">🎒</span><strong>2019</strong> – Mochilão pela América do Sul</li>
                    <li><span className="year-icon">❤️</span><strong>2022</strong> – Criei o blog com muito amor</li>
                </ul>
            </section>

            <section className="timeline-section">
                <h2 className="orange-title">Curiosidades</h2>
                <ul className="curiosities-list">
                    <li><i class="fa-solid fa-earth-americas"></i> Destino favorito: Itália</li>
                    <li><i class="fa-solid fa-camera"></i> Amo fotografar detalhes dos lugares</li>
                    <li><i class="fa-solid fa-video"></i> Sempre viajo minhas camera e drone</li>
                </ul>
            </section> */}
        </div>
    )
}

export default About;