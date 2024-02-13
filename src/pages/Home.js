import Wrapper from "../wrappers/Home";
import About from "./About";
import MainCategories from "./Categories/MainCategories";
import Products from "./Products/Products";

const Home = () => {
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
