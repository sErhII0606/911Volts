import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const NameTooltip = ({ id, children, title }) => {
  return (
    <OverlayTrigger overlay={<Tooltip id={id}>{title}</Tooltip>}>
      <span>{children}</span>
    </OverlayTrigger>
  );
};

export default NameTooltip;
