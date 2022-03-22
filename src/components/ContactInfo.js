import React from 'react';
import  { ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container , Row, Col} from 'react-bootstrap'
import { PhoneFill, EnvelopeFill, Github, Linkedin,   } from 'react-bootstrap-icons';

export default function Contact() {
return (
  
<div className='px-5 py-4' >
  <Container fluid>
    <Row >
      <Col md={6} className="offset-md-3">
      

    <div className="ms-2 me-auto">
      <div className="fw-bold">Phone Number <PhoneFill></PhoneFill></div>
      678 978 9459
    </div>
 
    <div className="ms-2 me-auto">
      <div className="fw-bold">Email <EnvelopeFill></EnvelopeFill></div>
        emily_reese@yahoo.com
    </div>

    <div className="ms-2 me-auto">
      <div className="fw-bold">    <a href="https://github.com/EmiReese">Github</a><br></br><Github>
      </Github></div>
     
    </div>
\
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