import Wrapper from "../../wrappers/MainCategories";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import { getAllProducts } from "../../features/AllProducts/allProductsSlice";
import useDeviceSize from "../../utils/useDeviceSize";
import SliderComponent from "../../components/Categories/SliderComponent";

const MainCategories = () => {
  const { isLoading } = useSelector((store) => store.allProducts);

  const [width, height] = useDeviceSize();
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
  return (
    <Wrapper>
      <section className="slick-container">
        {width >= 1480 && <SliderComponent slidesToShow={4} />}
        {width >= 1180 && width < 1480 && <SliderComponent slidesToShow={3} />}
        {width >= 780 && width < 1180 && <SliderComponent slidesToShow={2} />}
        {width < 780 && <SliderComponent slidesToShow={1} />}
      </section>
    </Wrapper>
  );
};

export default MainCategories;
