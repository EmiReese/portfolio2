import React from 'react';
// import flowerBouquet from '../images/flowerBouquet.jpg';
// import bush from '../images/bush.jpeg';
// import pinkRose from '../images/pinkRose.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container , Row, Col} from 'react-bootstrap';
import CharityLocator from '../images/CharityLocator.jpg';
import HandyCart from '../images/HandyCart.jpg';
import VirtualPets from '../images/VirtualPets.jpg';

export default function portfolioContainer (){
  return (
<Container id="Portfolio">
  <Row>

    <section className="page-section" id="workSection" >
      <Col xs={12} md={6} lg={12} className = "mb-3">
    <h3>Portfolio Projects</h3>
    </Col>

    <Col xs={12} md={6} lg={4} className = "p-4">
    
    <div className="portfolioItem">
   <h5 className="p-3">Virtual Pets</h5>
                  <a
                  className="repoLink"
                  href="https://virtualpets1234.herokuapp.com/" >
                    <img
               src={ VirtualPets } alt="pink roses with a grey background"
                className="portfolioImg" />
                </a>
    </div>
    </Col>


<Col xs={12} md={6} lg={4} className = "p-3">
    <div className="portfolioItem">
    <h5 className = "p-4">HandyCart</h5>
    <a
                  className="repoLink"
                  href="https://github.com/EmiReese/mern-app"
                >
          <img
               src={ HandyCart } alt="pink roses with a black background"
                className="portfolioImg" />
                </a>
    </div>
    </Col>

    <Col xs={12} md={6} lg={4}className = "p-3">
    <div className="portfolioItem">
        <h5 className = "p-4">Charity Locator</h5>
    <a
                  className="repoLink"
                  href="https://cheez0id.github.io/Charity-Locator-Project-P1G7/"
                >
                
          <img
               src={ CharityLocator } alt="pink roses with a black background"
                className="portfolioImg" />
                </a>
    </div>
    </Col>
</section>
</Row>
</Container>
  );
}