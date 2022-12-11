import Carousel1 from './../assets/images/carousel/carousel1.jpg'
import Carousel2 from './../assets/images/carousel/carousel2.jpg'
import Carousel3 from './../assets/images/carousel/carousel3.jpg'

function Carousel() {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide carousel-fade container mt-2"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item " data-bs-interval="10000">
          <img src={Carousel1} className="d-block w-100" alt="..." height={450} />
        </div>
        <div className="carousel-item active" data-bs-interval="10000">
          <img src={Carousel2} className="d-block w-100" alt="..." height={450}/>
        </div>
        <div className="carousel-item" data-bs-interval="10000">
          <img src={Carousel3} className="d-block w-100" alt="..." height={450}/>
        </div>
      </div>
    </div>
  );
}

export default Carousel