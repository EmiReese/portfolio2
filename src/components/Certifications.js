import React from "react";
import  JS from '../images/JS.png'
import  CSS  from '../images/CSS.png'
import GT from '../images/GT.png'
import AzureFun from '../images/AzureFun.jpeg'
import "../stylesheets/certstylesheet.css"
import { Row, Col } from "react-bootstrap";


export default function Certifications (){
    return (
    <div class= "contentContainer"> 
        <div class="certsContainer">
            <h2>Certifications</h2>
            <Row>
                <Col>
                     <img  src={ GT }
                        alt="Full Stack Flex Web Development Course Completion Certificate"
                        id="CertsGeorgiaTech"
                        className="certsImage"
                        />
                </Col>
                <Col>
                    <img  src={ JS }
                        alt="Javascript Course Completion Certificate"
                        id="CertsJavascript"
                        className="certsImage"
                         />
                </Col>  
            
                <Col>
                        <img src={ CSS } 
                        alt="CSS Course Completion Certificate"
                        id="CertsCSS"
                        className="certsImage"
                        />
                </Col>
          
                <Col>
                        <img src={ AzureFun } 
                        alt="Azure Fundamentals Course Certificate"
                        id="CertsAzureFun"
                        className="certsImage"
                        />
                </Col>
          </Row>
                
        </div>
    </div>
    );
}