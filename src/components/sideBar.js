import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProductsByCat } from "../store/actions/productsActions";

const SideBar = () => {
  const dispatch = useDispatch();

  const loadProduct = (e) => {
    const category = e.target.href.split("/").pop();
    dispatch(getProductsByCat(category));
  };
  return (
    <div className="card mb-3 border-0">
      <div className="card-header text-center">Categories</div>
      <div className="card-body">
        <ul className="list-group list-group-flush">
          <li className="list-group-item border-0">
            <Link
              to="/products/cat1"
              className="dropdown-item"
              onClick={loadProduct}
            >
              horror
            </Link>
          </li>
          <li className="list-group-item border-0">
            <Link
              to="/products/cat2"
              className="dropdown-item"
              onClick={loadProduct}
            >
              aventure
            </Link>
          </li>
          <li className="list-group-item border-0">
            <Link
              to="/products/cat3"
              className="dropdown-item"
              onClick={loadProduct}
            >
             fictiv
            </Link>
          </li>
          <li className="list-group-item border-0">
            <Link
              to="/products/all"
              className="dropdown-item"
              onClick={loadProduct}
            >
              all categories
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
