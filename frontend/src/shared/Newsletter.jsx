// import React from 'react'
// import './newsletter.css'

// import { Container, Row, Col} from 'reactstrap';
// import maleTourist from '../assets/images/male-tourist.png'

// const Newsletter = () => {
//   return <section className="newsletter">
//     <Container>
//         <Row>
//             <Col lg='6'>
//                 <div className="newsletter__content">
//                     <h2>Inscreva-se agora para receber informações de viagens.</h2>
//                     <div className="newsletter__input">
//                           <input type="email" placeholder="Entre com seu Email"/>
//                           <button className="btn newsletter__btn">Inscreva-se</button>
//                     </div>     
//                     {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
//                     Sed do eiusmod tempor incididunt ut labore et dolore magna
//                     aliqua</p> */}
//                 </div>
//             </Col>
//             <Col lg='6'>
//                 <div className="newletter__img">
//                     <img src={maleTourist} alt="" />
//                 </div>
//             </Col>
//         </Row>
//     </Container>
//   </section>
// }

// export default Newsletter

import React, { useState } from 'react';
import './newsletter.css';
import { Container, Row, Col } from 'reactstrap';
import maleTourist from '../assets/images/male-tourist.png';

import { BASE_URL } from './../utils/config'; // Ensure you have this utility

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();

    // Email validation
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return setMessage("Por favor, insira um email válido.");
    }

    try {
      const res = await fetch(`${BASE_URL}/emails`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const result = await res.json();

      if (!res.ok) {
        alert(result.message); // Display error from the server
        return;
      }

      setMessage(result.message); // Success message
      setEmail(''); // Clear input field
    } catch (err) {
      setMessage('Erro ao se inscrever. Por favor, tente novamente.');
      console.error(err.message); // Log error for debugging
    }
  };

  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter__content">
              <h2>Inscreva-se agora para receber informações de viagens.</h2>
              <form onSubmit={handleSubscribe} className="newsletter__input">
                <input
                  type="email"
                  placeholder="Entre com seu Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button className="btn newsletter__btn" type="submit">
                  Inscreva-se
                </button>
              </form>
              {message && <p>{message}</p>}
            </div>
          </Col>
          <Col lg="6">
            <div className="newletter__img">
              <img src={maleTourist} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
