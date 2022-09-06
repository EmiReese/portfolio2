import React from "react";
import  JS from '../images/JS.png'
import  CSS  from '../images/CSS.png'
import GT from '../images/GT.png'
import "../stylesheets/certstylesheet.css"

export default function Certifications (){
    return (
        <div class="certsContainer">
            <h2>Certifications</h2>
               <img  src={ GT }
                        alt="Full Stack Flex Web Development Course Completion Certificate"
                        id="CertsGeorgiaTech"
                        className="certsImage"
                     />
                    <img  src={ JS }
                        alt="Javascript Course Completion Certificate"
                        id="CertsJavascript"
                        className="certsImage"
                     />
          
                    <img src={ CSS } 
                        alt="CSS Course Completion Certificate"
                        id="CertsCSS"
                        className="certsImage"
                        />
             
        </div>
    );
}