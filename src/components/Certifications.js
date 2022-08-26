import React from "react";
import  JS from '../images/JS.png'
import  CSS  from '../images/CSS.png'
import GT from '../images/GT.png'
import "../stylesheets/certstylesheet.css"

export default function Certifications (){
    return (
        <div class="certContainer">
               <img  src={ GT }
                        alt="Full Stack Flex Web Development Course Completion Certificate"
                        className="certImage"
                     />
                    <img  src={ JS }
                        alt="Javascript Course Completion Certificate"
                        className="certImage"
                     />
          
                    <img src={ CSS } 
                        alt="CSS Course Completion Certificate"
                        className="certImage"
                        />
             
        </div>
    );
}