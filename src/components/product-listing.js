import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { AddToCartAction } from "../store/actions/cartActions";
import { useDispatch } from "react-redux";

const Product = ({ product }) => {
  const { link, image, name, offers, id } = product;
  const dispatch = useDispatch();

  const styles = {
    height:"300px",

  }


  const addToCart = (_id) => {
    dispatch(AddToCartAction(_id));
  };
  return (
    <div className="my-2 mt-4">
      <div className="card text-center">
        <a href={link} className="nav-link">
          <img src={image} style={styles} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name} </h5>
            <h6
              className={
                offers.availability == "InStock"
                  ? "card-title text-success fw-bold"
                  : "card-title text-danger fw-bold"
              }
            >
              {offers.price + " " + offers.currency}
            </h6>
          </div>
        </a>
        <button
          type="button"
          className="card-footer btn btn-success border-0"
          onClick={() => addToCart(id)}
        >
          Add to cart
          <FontAwesomeIcon icon={faCartPlus} />
        </button>
      </div>
    </div>
  );
};

export default Product;
