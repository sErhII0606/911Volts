import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Wrapper from "../../wrappers/Products";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import Slider from "react-slick";
import { getAllProducts } from "../../features/AllProducts/allProductsSlice";
import ProductPlaceholder from "../../components/Products_Page/ProductPlaceholder";
import PagePagination from "../../components/Products_Page/PagePagination";
import useDeviceSize from "../../utils/useDeviceSize";
import ProductPlaceholderHorizontal from "../../components/Products_Page/ProductPlaceholderHorizontal";
const Products = () => {
  const { products, isLoading, page } = useSelector(
    (store) => store.allProducts
  );
  const { search } = useSelector((store) => store.search);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts(search));
  }, [search]);

  const [width, height] = useDeviceSize();
  //console.log(width, height);
  if (isLoading) {
    return (
      <Wrapper>
        <Spinner animation="border center" />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <section className="slick-container">
        <div className="products">
          {products.map((product, i) => {
            return <ProductPlaceholder key={i} product={product} />;
          })}
        </div>
        <div className="page-pagination">
          <PagePagination products={products} isLoading={isLoading} />
        </div>
      </section>
    </Wrapper>
  );
};

export default Products;
