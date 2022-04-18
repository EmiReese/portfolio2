import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Col} from 'react-bootstrap';



export default function portfolioContainer (props){
  return (

<Col xs={12} md={6} lg={4} className = "p-4">

<div className="portfolioItem">
<h5 className="p-3">{ props.title }</h5>
              <a
              className="repoLink"
              href={ props.link} >
                <img
           src={ props.img } alt={ props.alt}
            className="portfolioImg" />
            </a>
</div>
</Col>

  )
}