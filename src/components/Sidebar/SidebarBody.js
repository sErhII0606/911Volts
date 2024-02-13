import Accordion from "react-bootstrap/Accordion";
import SidebarCard from "./SidebarCard";
import { useSelector } from "react-redux";
import { categories } from "../../data";

const SidebarBody = () => {
  // const { categories } = useSelector((store) => store.allProducts);
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
                body=""
              />
            </div>
          );
        })}
      />
      <SidebarCard eventKey="1" />
    </Accordion>
  );
};

export default SidebarBody;
