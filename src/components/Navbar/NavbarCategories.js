import Nav from "react-bootstrap/Nav";
import { useEffect } from "react";
import { categories } from "../../data";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import { getAllProducts } from "../../features/AllProducts/allProductsSlice";

const Categories = () => {
  const navigate = useNavigate();
  const { products, isLoading /*, categories */ } = useSelector(
    (store) => store.allProducts
  );

  const { category } = useParams();
  return (
    <Nav justify variant="tabs" activeKey={`link-${category}`}>
      {categories.sort().map((category, i) => {
        const display = products.find((item) => item.category === category);
        return (
          <Nav.Item key={i}>
            <Nav.Link
              eventKey={`link-${category}`}
              onClick={() => navigate(`/categories/${category}`)}
            >
              {category}
            </Nav.Link>
          </Nav.Item>
        );
      })}
    </Nav>
  );
};

export default Categories;
