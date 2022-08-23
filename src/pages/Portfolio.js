import React from "react";
import PortfolioContainer from '../components/PortfolioContainer';
import {Container , Row, Col} from 'react-bootstrap';
import CharityLocator from '../images/CharityLocator.jpg';
import HandyCart from '../images/HandyCart.jpg';
import VirtualPets from '../images/VirtualPets.png';


export default function Portfolio ( ) {
    return (
        <Container id="Portfolio">
        <Row>
     
     <section className="page-section" id="workSection" >
       <Col xs={12} md={6} lg={12} className = "mb-3">
     <h3>Portfolio Projects</h3>
     </Col>
     
     <PortfolioContainer 
            title= "Virtual Pets"
            link="https://virtualpets1234.herokuapp.com/"
            img= { VirtualPets}
            alt="A girl with a white dog"
     />
     <PortfolioContainer
            title="HandyCart"
            link="https://github.com/EmiReese/mern-app"
            img= { HandyCart}
            alt="A note pad and a pen"
/>
<PortfolioContainer
            title="Charity Locator"
            link="https://cheez0id.github.io/Charity-Locator-Project-P1G7/"
            img= { CharityLocator }
            alt="Giving hands"
/>
     </section>
     </Row>
     </Container>
    );
}