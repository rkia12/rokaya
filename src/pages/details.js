import Index from ".";
import Breadcrumb from "../components/breadcrumb";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../store/actions/productsActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus,faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Spinner from "../components/spinner";
import { AddToCartAction } from "../store/actions/cartActions";

const Details = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const products = useSelector((state) => state.products);
  const cartProducts = useSelector((state) => state.cart.products);

  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
    dispatch(AddToCartAction(params.id, quantity));
  };

  useEffect(() => {
    const productId = params.id;
    dispatch(getProductById(productId));
  }, [dispatch]);

  return (
    <Index>
      <div className="container py-4">
        <Breadcrumb from="products" to={["details", "products"]} />
        <div className="row">
          {products.loaded ? (
            <>
              <div className="col-md-6 col-lg-4">
                <div className="p-4">
                  <img
                    src={products.product.image}
                    className="img-fluid rounded"
                    style={{
                      maxHeight: "300px",
                      maxWidth: "300px",
                      minHeight: "250px",
                      minWidth: "300px",
                    }}
                  />
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
                <h3 className="fw-bold text-secondary text-center fs-3 p-3 text-capitalize">
                  {products.product.name}
                </h3>
                <h5 className="text-muted lh-base p-2 my-3">
                  {products.product.description}
                </h5>
                <div
                  className={
                    products.product.offers.availability == "OutOfStock"
                      ? "p-2 my-2 fw-bold text-danger"
                      : "p-2 my-2 fw-bold text-success"
                  }
                >
                  {products.product.offers.price +
                    " " +
                    products.product.offers.currency}
                </div>
                <form className="p-2" style={{ maxWidth: "200px" }}>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label text-muted"
                    >
                      Quantity
                    </label>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      className="form-control"
                      size={2}
                    />
                  </div>
                  <div className="mb-3">
                    {cartProducts.find((pro) => pro.id == params.id) ? (
                      <Link
                        to="/cart"
                        type="button"
                        className="btn btn-primary d-block"
                        onClick={addToCart}
                      >
                        <FontAwesomeIcon icon={faCircleCheck} />&nbsp; Check Cart
                      </Link>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-success d-block"
                        onClick={addToCart}
                      >
                        <FontAwesomeIcon icon={faCartPlus} /> &nbsp; Add To Cart
                      </button>
                    )}
                  </div>
                </form>
              </div>
              <div className="col-md-12 my-4">
                <h4 className="text-secondary">Specification : </h4>
                <dl>
                  <dt className="text-secondary">Author</dt>
                  <dd className="text-muted">{products.product.author}</dd>
                  <dt className="text-secondary">Year</dt>
                  <dd className="text-muted">{products.product.releaseYear}</dd>
                  <dt className="text-secondary">price</dt>
                  <dd className="text-muted">
                    {products.product.offers.price +
                      " " +
                      products.product.offers.currency}
                  </dd>
                </dl>
              </div>
            </>
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </Index>
  );
};

export default Details;
