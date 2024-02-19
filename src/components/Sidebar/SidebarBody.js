import Accordion from "react-bootstrap/Accordion";
import SidebarCard from "./SidebarCard";
import { useDispatch, useSelector } from "react-redux";
import { categories } from "../../data";
import { handleClose } from "../../features/sidebar/sidebarSlice";

const SidebarBody = () => {
  // const { categories } = useSelector((store) => store.allProducts);
  const dispatcher = useDispatch();
  const handleClick = () => dispatcher(handleClose());
  return (
    <Accordion alwaysOpen>
      <SidebarCard
        eventKey="0"
        title="Main Categories"
        body={categories.map((category, i) => {
          return (
            <div key={i}>
              <SidebarCard
                eventKey={i}
                title={category}
                category={category}
                handleClick={handleClick}
                body=""
              />
            </div>
          );
        })}
      />
      <SidebarCard
        eventKey="1"
        title="Login"
        login={true}
        handleClick={handleClick}
      />
      <SidebarCard
        eventKey="2"
        title="Cart"
        cart={true}
        handleClick={handleClick}
      />
    </Accordion>
  );
};

export default SidebarBody;
