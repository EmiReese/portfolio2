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
            alt="A grey background"
        />
        <Carousel.Caption className='carouselCaption'>
        <a href="https://virtualpets1234.herokuapp.com/" className="portfolioDeployLink">Deployment</a>
        <a href="https://github.com/CSanchez486/Virtual_Pet" className="portfolioCodeLink">The code</a>
          <h5>Virtual Pets</h5>
          <p>Virtual Pets is a web-based app that allows for pet parents to make telehealth consultation appointments with Veterinarians. </p>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="h-75 w-75 carouselItem">
        <img
          className="d-block h-100 w-100"
          src={grey}
          alt="a grey background"
        />
        <Carousel.Caption className='carouselCaption'>
        <a href="https://github.com/EmiReese/HandyCart" className="portfolioCodeLink">The code</a>
          <h5>HandyCart</h5>
          <p>This is a retail purchasing application leveraging contact list technology and financial budget parameters.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="h-75 w-75 carouselItem">
        <img
          className="d-block h-100 w-100"
          src={grey}
          alt="a grey background"
        />
        <Carousel.Caption className='carouselCaption'>
        <a href="https://cheez0id.github.io/Charity-Locator-Project-P1G7/" className="portfolioDeployLink">Deployment</a>
        <a href="https://github.com/Cheez0id/Charity-Locator-Project-P1G7" className="portfolioCodeLink">The code</a>
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