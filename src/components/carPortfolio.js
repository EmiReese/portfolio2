import Carousel from 'react-bootstrap/Carousel';
import CharityLocator from '../images/CharityLocator.jpg';
import HandyCart from '../images/HandyCart.jpg';
import VirtualPets from '../images/VirtualPets.png';
import '../stylesheets/carPortfolio.css'

function DarkVariantExample() {
  return (
    <Carousel variant="dark" id="Portfolio" className="carousel">
      <Carousel.Item className="h-75 w-75 carouselItem">
        <img
             className=" h-100 w-100 "
            title= "Virtual Pets"
            link="https://virtualpets1234.herokuapp.com/"
            src={ VirtualPets }
            alt="A girl with a white dog"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="h-75 w-75 carouselItem">
        <img
          className="d-block h-100 w-100"
          src={HandyCart}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="h-75 w-75 carouselItem">
        <img
          className="d-block h-100 w-100"
          src={CharityLocator}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;