import React from 'react';
import flowerBouquet from '../images/flowerBouquet.jpg';
import bush from '../images/bush.jpeg';
import pinkRose from '../images/pinkRose.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container , Row, Col} from 'react-bootstrap'

export default function portfolioContainer (){
  return (
<Container id="Portfolio">
  <Row>

    <section className="page-section" id="workSection">
      <Col xs={12} md={6} lg={12} className = "mb-3 mt-0">
    <h3>Portfolio Projects</h3>
    </Col>

    <Col xs={12} md={6} lg={4} className = "p-3">
    
    <div className="portfolioItem">
   
                  <a
                  className="repoLink"
                  href="https://virtualpets1234.herokuapp.com/" >
                    <img
               src={ flowerBouquet } alt="pink roses with a grey background"
                className="portfolioImg" />
                </a>
    </div>
    </Col>


<Col xs={12} md={6} lg={4} className = "p-3">
    <div className="portfolioItem">
    
    <a
                  className="repoLink"
                  href="https://github.com/EmiReese/mern-app"
                >
          <img
               src={ bush } alt="pink roses with a black background"
                className="portfolioImg" />
                </a>
    </div>
    </Col>

    <Col xs={12} md={6} lg={4}className = "p-3">
    <div className="portfolioItem">
        
    <a
                  className="repoLink"
                  href="https://cheez0id.github.io/Charity-Locator-Project-P1G7/"
                >
                
          <img
               src={ pinkRose } alt="pink roses with a black background"
                className="portfolioImg" />
                </a>
    </div>
    </Col>
</section>
</Row>
</Container>
  );
}