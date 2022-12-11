import Index from "./index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faChevronCircleRight,
  faChevronCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import EmptyCart from "./../assets/images/empty-cart.jpg";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/breadcrumb";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCartAction,
  changeQuantityAction,
  clearCartAction,
} from "../store/actions/cartActions";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const toTrash = (_id) => {
    dispatch(removeFromCartAction(_id));
  };

  const changeQuantity = (e, _id) => {
    const quantity = e.target.value;
    dispatch(changeQuantityAction(quantity, _id));
  };

  const clearCart = () => {
    dispatch(clearCartAction());
  };

  const subtotal = () => {
    let subtotal = 0;
    if (cart.products.length) {
      for (let product of cart.products) {
        subtotal += product.offers.price * product.quantity;
      }
    }
    return subtotal;
  };

  const total = () => {
    return subtotal() + 210;
  };

  return (
    <Index>
      <div className="container mt-4">
        <Breadcrumb from="Home" to={["cart"]} />
        <strong className="fw-bold fs-4 my-5">Cart</strong>

        <div className="container">
          <div className="row">
            {cart.products.length > 0 ? (
              <>
                <div className="col-lg-8 col-md-9 col-sm-12">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col" className="text-center">
                          image
                        </th>
                        <th scope="col" className="text-center">
                          Book Name
                        </th>
                        <th scope="col" className="text-center">
                          Author
                        </th>
                        <th scope="col" className="text-center">
                          Price
                        </th>
                        <th scope="col" className="text-center">
                          Quantity
                        </th>
                        <th scope="col" className="text-center">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.products.map((product, index) => (
                        <tr key={product.id}>
                          <th scope="row" className="text-center">
                            <img
                              src={product.image}
                              className="img-fluid"
                              style={{ height: "70px", width: "50px" }}
                            />
                          </th>
                          <td className="text-center">{product.name}</td>
                          <td className="text-center">{product.author}</td>
                          <td className="text-center">
                            {product.offers.price}
                          </td>
                          <td className="form">
                            <input
                              type="number"
                              size={2}
                              min={1}
                              max={100}
                              onChange={(e) => changeQuantity(e, product.id)}
                              value={product.quantity}
                              className="form-control"
                            />
                          </td>
                          <td className="text-center">
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={() => toTrash(product.id)}
                            >
                              <FontAwesomeIcon icon={faTrash} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="col-lg-4 col-md-3 col-sm-12">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title text-center fw-bold fs-6">
                        Card title
                      </h5>
                      <p className="card-text text-secondary">
                        subtotal and total calculated based on fee and product
                        quantity
                      </p>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between">
                        <span>SubTotal </span>
                        <span className="">{subtotal()}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between">
                        <span>fee </span>
                        <span className="">210 </span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between">
                        <span>Total </span>
                        <span className="">{total()} </span>
                      </li>
                    </ul>
                    <div className="card-body">
                      <Link
                        to="/products/all"
                        className="d-block btn btn-success my-2"
                      >
                        <FontAwesomeIcon icon={faChevronCircleLeft} /> Continue
                        Shopping
                      </Link>
                      <Link
                        onClick={clearCart}
                        className="d-block btn btn-danger my-2"
                      >
                        Empty cart <FontAwesomeIcon icon={faTrash} />
                      </Link>
                      <Link to="/login" className="d-block btn btn-primary my-2">
                        Valider <FontAwesomeIcon icon={faChevronCircleRight} />
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="col-sm-12 p-5 text-center">
                <h1 className="fs-2 text-secondary fw-bold">
                  Your shopping cart
                </h1>
                <img src={EmptyCart} className="img-fluid p-5" />
                <br />
                <b className="text-muted">
                  Opps! your Shopping cart is empty ...
                </b>
                <Link to="/products/all">shopping</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </Index>
  );
};

export default Cart;
