import Carousel from 'react-bootstrap/Carousel';
import '../stylesheets/carPortfolio.css'
import grey from '../images/grey.webp'
function DarkVariantExample() {
  return (
    <Carousel variant="dark" id="Portfolio" className="carousel">
      <Carousel.Item className="h-75 w-75 carouselItem">
        <img
             className=" h-100 w-100 "
            title= "Virtual Pets"
            src={ grey }
            alt="A girl with a white dog"
        />
        <Carousel.Caption className='carouselCaption'>
          <h5>Virtual Pets</h5>
          <p>Virtual Pets is a web-based app that allows for pet parents to make telehealth consultation appointments with Veterinarians. </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="h-75 w-75 carouselItem">
        <img
          className="d-block h-100 w-100"
          src={grey}
          alt="Second slide"
        />
        <Carousel.Caption className='carouselCaption'>
          <h5>HandyCart</h5>
          <p>This is a retail purchasing application leveraging contact list technology and financial budget parameters.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="h-75 w-75 carouselItem">
        <img
          className="d-block h-100 w-100"
          src={grey}
          alt="Third slide"
        />
        <Carousel.Caption className='carouselCaption'>
          <h5>Charity Locator</h5>
          <p>
          An application intended to help underprivileged people or families connect to non-profit organizations closest to their location with resources like food.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;