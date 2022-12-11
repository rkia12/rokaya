import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBars,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

function NavBar() {
  const cart = useSelector((state) => state.cart);

  const [isLogedIn, setIsLogedIn] = useState(false);
  return (
    <>
      <nav className="container navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid justify-content-evenly justify-content-md-between justify-content-center">
          <ul className="d-flex d-md-flex mb-0">
          <Link to='/'><a className="navbar-brand me-2 fw-bold text-info" href="#">
              BookStore
            </a></Link>
            <div className="dropdown">
              <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FontAwesomeIcon icon={faBars} className="me-1" />
                All Categories
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <Link to="/products/cat1" className="dropdown-item">
                 horror
                  </Link>
                </li>
                <li>
                  <Link to="/products/cat2" className="dropdown-item">
                  aventure
                  </Link>
                </li>
                <li>
                  <Link to="/products/cat3" className="dropdown-item">
                    fictiv
                  </Link>
                </li>
              </ul>
            </div>
            <Link
              to="/"
              className="btn border border-primary mx-2 text-primary fw-bold"
              href="#"
            >
              Store
            </Link>
          </ul>

          <div className="d-flex flex-md-fill px-4">
            {/* <form
              className="input-group col-12 w-auto my-auto d-none d-sm-flex"
              style={{ minWidth: "90%" }}
            >
              <input
                type="search"
                className="form-control rounded"
                placeholder="Search"
              />
              <button className=" btn btn-primary input-group-text border-0 d-none d-lg-flex">
                <FontAwesomeIcon icon={faSearch} />
              </button>npm
            </form> */}
          </div>

          <ul className="navbar-nav flex-row">
            {isLogedIn ? (
              <li className="nav-item">
                <Link
                  to="/profile/dashboard"
                  className="nav-link d-sm-flex fw-bold me-2"
                >
                  <FontAwesomeIcon icon={faUser} className="me-1 mt-1" />
                  Profile
                </Link>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link
                    to="/login"
                    className="nav-link pe-0 me-0 d-sm-flex fw-bold"
                  >
                    Sign In /
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="nav-link fw-bold" href="#">
                    register
                  </Link>
                </li>
              </>
            )}

            <li className="nav-item position-relative">
              <Link
                to="/cart"
                className="nav-link fw-bold rounded p-2 border rounded-circle"
              >
                <FontAwesomeIcon icon={faCartShopping} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                  {cart.products.length}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
