import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { categories } from "../../data";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Image } from "react-bootstrap";

const SliderComponent = ({ slidesToShow }) => {
  const { products } = useSelector((store) => store.allProducts);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    // fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };
  return (
    <Slider {...settings}>
      {categories.map((category, i) => {
        const display = products.find((item) => item.category === category);
        return (
          <div className="content " key={i}>
            {" "}
            <Link to={`/categories/${category}`}>
              <Image
                thumbnail
                className="content-img"
                src={display?.img[0].imgLink}
              />
              <div className="content-text">{display?.category}</div>
            </Link>
          </div>
        );
      })}
    </Slider>
  );
};

export default SliderComponent;
