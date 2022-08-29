import Carousel from 'react-bootstrap/Carousel';
import '../stylesheets/carPortfolio.css'
import VirtualPets from '../images/VirtualPets.png'
import HC from '../images/HC.jpg'
import CL from '../images/CL.png'

function DarkVariantExample() {
  return (
    <Carousel variant="dark" id="Portfolio" className="carousel" fade>
      <Carousel.Item className="h-50 w-100 carouselItem">
        <img
            title= "Virtual Pets"
            src={ VirtualPets }
            alt="A deployment of Virtual Pets application"
        />
        <Carousel.Caption className='carouselCaption h-100 w-50'>
          <h5>Virtual Pets</h5>
          <p>Virtual Pets is a web-based app that allows for pet parents to make telehealth consultation appointments with Veterinarians. </p>
        <a href="https://github.com/CSanchez486/Virtual_Pet" className="portfolioCodeLink">The code</a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="h-100 w-100 carouselItem">
        <img
          src={HC}
          alt="A notebook and list"
        />
        <Carousel.Caption className='carouselCaption  h-100 w-50'>
     
          <h5>HandyCart</h5>
          <p>This is a retail purchasing application leveraging contact list technology and financial budget parameters.</p>
          <a href="https://github.com/EmiReese/HandyCart" className="portfolioCodeLink">The code</a>
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
        <a href="https://github.com/Cheez0id/Charity-Locator-Project-P1G7" className="portfolioCodeLink">The code</a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;