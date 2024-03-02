import Accordion from "react-bootstrap/Accordion";
import SidebarCard from "./SidebarCard";
import { useDispatch, useSelector } from "react-redux";
import { categories } from "../../data";
import { handleClose } from "../../features/sidebar/sidebarSlice";
import CartComponent from "../Checkout/CartComponent";

const SidebarBody = () => {
  const { user } = useSelector((store) => store.user);
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
