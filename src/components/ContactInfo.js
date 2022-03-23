import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container , Row, Col} from 'react-bootstrap'
import { PhoneFill, EnvelopeFill, Github, Linkedin,   } from 'react-bootstrap-icons';

export default function Contact() {
return (
  
<div className='fs-4' >
  <Container fluid>
   <Row className="p-3 offset-1">
   <h3 id="Contact" >Contact Information</h3>
   </Row>
    <Row className="p-3 offset-1">
      <Col xs = {12} lg ={5}>
      <div className="ms-2 me-auto">
      <div className="fw-bold ">Phone Number <PhoneFill></PhoneFill></div>
      678 978 9459
    </div>
     </Col>

     <Col xs = {12} lg ={6}>
    <div className="ms-2 me-auto">
      <div className="fw-bold">Email <EnvelopeFill></EnvelopeFill></div>
        emily_reese@yahoo.com
    </div>
    </Col>
    </Row>

<Row className="p-3 offset-1">
    <Col xs = {12} lg ={6}>
    <div className="ms-2 me-auto">
      <div className="fw-bold">    <a href="https://github.com/EmiReese">Github</a><br></br><Github>
      </Github></div>
    </div>
  </Col>

  <Col xs = {12} lg ={6}>
    <div className="ms-2 me-auto">
      <div className="fw-bold"><a href="https://www.linkedin.com/in/emily-reese-50546621b/">LinkedIn</a><br></br>
      <Linkedin>
      </Linkedin>
      </div>
    </div>
  </Col>
</Row>


</Container>
</div>
);
}