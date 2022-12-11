import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Index from "./index";
import Carousel from "./../components/carousel";
import SideBar from "../components/sideBar";
import Pagination from "../components/pagination";
import Product from "./../components/product-listing.js";
import { useSelector, useDispatch } from "react-redux";
import { getProductsByCat } from "../store/actions/productsActions";
import Breadcrumb from "../components/breadcrumb";
import Spinner from "../components/spinner";

const Products = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    const category = params.category;
    dispatch(getProductsByCat(category));
  }, [dispatch]);


  return (
    <Index>
      <Carousel />
      <div className="container">
        <Breadcrumb from="Home" to={["products"]} />
        <div className="d-flex flex-row ">
          <div className="col-md-3 col-sm-12">
            <SideBar />
          </div>
          <div className="d-flex flex-row flex-wrap m-22">
            {products.loaded == true ? (
              products.products.map((product) => (
                <div className="col-md-3 col-sm-12" key={product.id}>
                  <Product product={product} />
                </div>
              ))
            ) : (
              <Spinner />
            )}
          </div>
        </div>
        <Pagination />
      </div>
    </Index>
  );
};

export default Products;
