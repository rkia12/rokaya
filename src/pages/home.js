import Index from "./index";
import Carousel from "./../components/carousel";
import Listing from "../components/listing";
import Pagination from "../components/pagination";

// this is default rendered page => home page
const Home = () => {
  return (
    <Index>
      <Carousel />
      <div className="container mt-4">
        <strong className="fw-bold fs-4 px-5">Popular Products</strong>
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-5 px-2 mt-2">
          <Listing />
        </div>
        <Pagination/>
      </div>
    </Index>
  );
};

export default Home;
