import Carousel from 'react-bootstrap/Carousel';
import '../stylesheets/carPortfolio.css'
import VirtualPets from '../images/VirtualPets.png'
import HC from '../images/HC.jpg'
import CL from '../images/CL.png'
import AS from '../images/albumSearch.png'

function DarkVariantExample() {
  return (
    <div className="carouselContainer">
      <Carousel variant="dark" id="Portfolio" className="carousel" fade>
      <Carousel.Item className="h-100 w-100 carouselItem">
        <img
            title= "Virtual Pets"
            src={ VirtualPets }
            alt="A deployment of Virtual Pets application"
        />
        <Carousel.Caption className='carouselCaption h-100 w-50'>
          <h5>Virtual Pets</h5>
          <p>Virtual Pets is a web-based app that allows for pet parents to make telehealth consultation appointments with Veterinarians. </p>
        <a href="https://virtualpets1234.herokuapp.com/" className="portfolioCodeLink">The Deployment</a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="h-100 w-100 carouselItem">
        <img
          src={AS}
          alt="A notebook and list"
        />
        <Carousel.Caption className='carouselCaption  h-100 w-50'>
     
          <h5>Album Search</h5>
       
          <p>This is an album searching application. Created as an example of my fundamental knowledge of HTML, CSS and Javascript.</p>
          <a href="https://emireese.github.io/Album-Search/" className="portfolioCodeLink">The Deployment</a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="h-100 w-100 carouselItem">
        <img
          src={CL}
          alt="A deployment of the application"
        />
        <Carousel.Caption className='carouselCaption  h-100 w-50'>
        
          <h5>Charity Locator</h5>
          <p>
          An application intended to help underprivileged people or families connect to non-profit organizations closest to their location with resources like food.
          </p>
        <a href="https://cheez0id.github.io/Charity-Locator-Project-P1G7/" className="portfolioCodeLink">The Deployment</a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </div>
    
  );
}

export default DarkVariantExample;