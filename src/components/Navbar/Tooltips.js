import Tooltip from "react-bootstrap/Tooltip";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import { Image } from "react-bootstrap";

export const renderTooltipCart = (cart, total) => (
  <Tooltip id="button-tooltip">
    <Card>
      <ListGroup variant="flush">
        {cart[0] ? (
          <>
            {cart.map((cartItem, i) => {
              return (
                <ListGroup.Item key={i}>
                  <Image
                    src={cartItem.product.img[0].imgLink}
                    style={{ width: "25px" }}
                    rounded
                  />
                  {cartItem.product.name.substring(0, 15)}
                  {" qua: "}
                  {cartItem.quantity}
                </ListGroup.Item>
              );
            })}

            <ListGroup.Item>{`Total: $${Math.trunc(total)}`}</ListGroup.Item>
          </>
        ) : (
          "Your cart is empty!"
        )}
      </ListGroup>
    </Card>
  </Tooltip>
);

export const renderTooltipUser = (user) => (
  <Tooltip id="button-tooltip">{user ? "logout" : "login"}</Tooltip>
);
