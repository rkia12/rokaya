import { useEffect,useState } from "react";
import Product from "./../components/product-listing.js";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../store/actions/productsActions";
import Spinner from "../components/spinner";
import SearchBar from "./SearchBar.jsx";
import Fuse from "fuse.js";


function Listing() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [search, setSearch] = useState("");
  const fuse = new Fuse(products.products, {
    keys: ["name", "id","price"],
    threshold: 0.2,
  });
  const results = fuse.search(search);
  const filtered = search
    ? results.map((result) => result.item)
    : products.products;

  const handleOnSearch = (value) => {
    setSearch(value);
  };

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <>
<SearchBar setValue={handleOnSearch} value={search} />
{products.loaded ? (
        filtered.map((product) => (
          <Product product={product} key={product.id} />
        ))
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default Listing;
