import Wrapper from "../../wrappers/MainCategories";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { useEffect } from "react";
import { categories } from "../../data";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import { getAllProducts } from "../../features/AllProducts/allProductsSlice";

const MainCategories = () => {
  const { products, isLoading /*, categories */ } = useSelector(
    (store) => store.allProducts
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts(""));
  }, []);
  if (isLoading) {
    return (
      <Wrapper>
        <Spinner animation="border center" />
      </Wrapper>
    );
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    // fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };
  return (
    <Wrapper>
      <section className="slick-container">
        <Slider {...settings}>
          {categories.map((category, i) => {
            const display = products.find((item) => item.category === category);
            return (
              <div className="content " key={i}>
                {" "}
                <Link to={`/categories/${category}`}>
                  <img className="content-img" src={display?.img[0].imgLink} />
                  <div className="content-text">{display?.category}</div>
                </Link>
              </div>
            );
          })}
        </Slider>
      </section>
    </Wrapper>
  );
};

export default MainCategories;
