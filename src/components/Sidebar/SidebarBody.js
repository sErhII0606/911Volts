import Accordion from "react-bootstrap/Accordion";
import SidebarCard from "./SidebarCard";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { categories } from "../../data";
import { handleClose } from "../../features/sidebar/sidebarSlice";
import CartComponent from "../Checkout/CartComponent";
import SearchForm from "../Navbar/SearchForm";
import { setSearchOrder } from "../../features/search/searchSlice";

const SidebarBody = () => {
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.user);
  const { searchOrder } = useSelector((store) => store.search);
  const dispatcher = useDispatch();
  const handleClickClose = () => dispatcher(handleClose());
  return (
    <Accordion alwaysOpen>
      <SidebarCard
        eventKey="3"
        title="Home"
        home={true}
        handleClick={handleClickClose}
      />{" "}
      <SidebarCard
        eventKey="0"
        title="Main Categories"
        categories={true}
        body={categories.sort().map((category, i) => {
          return (
            <div key={i}>
              <SidebarCard
                eventKey={i}
                title={category}
                category={category}
                handleClick={handleClickClose}
                body=""
              />
            </div>
          );
        })}
      />
      <SidebarCard
        eventKey="4"
        title="Products"
        products={true}
        handleClick={handleClickClose}
      />
      {!user && (
        <SidebarCard
          eventKey="6"
          title="Find Your Order"
          order={true}
          body={
            <SearchForm
              name="search"
              value={searchOrder}
              inputClassName="me-2"
              formClassName="d-flex"
              handleClick={() => {
                navigate(`/guest_order/${searchOrder}`);
                dispatcher(setSearchOrder(""));
                handleClickClose();
              }}
              handleChange={(e) => {
                dispatcher(setSearchOrder(e.target.value));
              }}
              inputPlaceholder="Search"
              buttonVariant="outline-success"
              buttonPlaceholder="Search"
            />
          }
          /*  handleClick={handleClickClose} */
        />
      )}
      <SidebarCard
        eventKey="2"
        title="Cart"
        cart={true}
        /*   */
        body={<CartComponent handleClick={handleClickClose} />}
      />
      {user ? (
        <SidebarCard
          eventKey="1"
          title="Logout"
          isUser={true}
          handleClick={handleClickClose}
        />
      ) : (
        <SidebarCard
          eventKey="1"
          title="Login"
          login={true}
          handleClick={handleClickClose}
        />
      )}
    </Accordion>
  );
};

export default SidebarBody;
