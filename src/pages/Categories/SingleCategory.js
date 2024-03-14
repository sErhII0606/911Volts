import React from "react";
import { Link, useParams } from "react-router-dom";
import Wrapper from "../../wrappers/Products";
import { useSelector, useDispatch } from "react-redux";
import { searchByCategory } from "../../features/AllProducts/allProductsSlice";
import { Spinner } from "react-bootstrap";
import ProductPlaceholder from "../../components/Products_Page/ProductPlaceholder";
import ProductPlaceholderHorizontal from "../../components/Products_Page/ProductPlaceholderHorizontal";
import PagePagination from "../../components/Products_Page/PagePagination";
import useDeviceSize from "../../utils/useDeviceSize";

const SingleCategory = () => {
  const { products, isLoading, page, productsPerPage } = useSelector(
    (store) => store.allProducts
  );
  const dispatch = useDispatch();

  const { category } = useParams();

  React.useEffect(() => {
    dispatch(searchByCategory({ category, name: "" }));
  }, [category]);
  const [width, height] = useDeviceSize();
  if (isLoading) {
    return <Spinner />;
  }
  if (!products[0]) {
    return <h1>Currently no Items</h1>;
  }
  return (
    <Wrapper>
      <section className="slick-container">
        <div className="products">
          {products.map((product, i) => {
            if (
              i >= page * productsPerPage - productsPerPage &&
              i <= page * productsPerPage - 1
            ) {
              return <ProductPlaceholder key={i} product={product} />;
            }
          })}
        </div>
        <div className="page-pagination">
          <PagePagination isLoading={isLoading} />
        </div>
      </section>
    </Wrapper>
  );
};

export default SingleCategory;
