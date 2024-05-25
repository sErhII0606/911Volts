import { useEffect } from "react";
import Wrapper from "../wrappers/Home";
import About from "./About";
import MainCategories from "./Categories/MainCategories";
import Products from "./Products/Products";
import { setIsOrderCreated } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setIsOrderCreated(false));
  }, []);
  return (
    <Wrapper>
      <main>
        <section>
          <h2 className="title ">------------About us------------</h2>

          <About />
        </section>
        <section>
          <h2 className="title">------------MAIN CATEGORIES------------</h2>

          <MainCategories />
        </section>
        <section>
          <h2 className="title">------------PRODUCTS------------</h2>
          <Products />
        </section>
        <section>
          <h2 className="title">------------OUR SERVICES------------</h2>
        </section>
      </main>
    </Wrapper>
  );
};

export default Home;
