import React from 'react';
import  Emily from '../images/Emily.png';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container , Row, Col} from 'react-bootstrap'
import Certifications from './Certifications';
import '../stylesheets/about.css'
export default function About() {
  return (
    <div >
      <Container fluid="lg p-5 mt-5">
  <Row>
  <Col xs={12} md={6} lg={12} className = "mb-5">
    <h3>About me</h3>
    </Col>
  <Col xs ={12} md={8}>

        <p id="About">
        Motivated full stack developer involved in multiple projects using JavaScript
        and MERN Stack. Seeking an entry-level software developer position within teams that value communication, honesty, emotional intelligence, creativity, and problem-solving. Able to effectively self-manage during independent projects, as well as collaborate as part of a productive team working remotely or in-office.
        </p>
        </Col>

      <Col xs={12} md={4} className="aboutImgContainer">
        <div className='d-flex justify-content-center'>
          <img className="w-75  shadow bg-white rounded border-right border-dark" src= {Emily} alt="Emily Reese" />
        </div>
      </Col>
  </Row>
</Container>
<Certifications />
    </div>
  );
}



