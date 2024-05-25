const orderStatus = (paid, shipped, delivered) => {
  if (!paid && !shipped) {
    return "Awaiting payment";
  }
  if (paid && !shipped) {
    return "Awaiting shipment";
  }
  if (shipped && !delivered) {
    return "Shipped";
  }
  if (delivered) {
    return "Delivered";
  }
};
export const htmlEmail = (
  <div>
    <h4>
      Order from <span style={{ fontFamily: cursive }}>{order.date}</span>
    </h4>
    <h5>
      Order status:
      <span style={{ fontFamily: cursive }}>
        {" "}
        ${orderStatus(order.paid, order.shipped, order.delivered)}.
      </span>{" "}
      Total:
      <span style={{ fontFamily: cursive }}> ${Math.trunc(order.total)}.</span>
    </h5>
    <h5>
      Delivery address:{" "}
      <span style={{ fontFamily: cursive }}>{order.address}.</span>
    </h5>
    <div>
      <h4>Items:</h4>
      {order.items.map((item, i) => {
        return (
          <div className="item" key={i}>
            <h5>
              {i + 1}.
              <span style={{ fontFamily: cursive }}>{item.product.name}</span>
            </h5>
            <img
              rounded
              style={{ height: "70px" }}
              src={item.product.img[0].imgLink}
            />
          </div>
        );
      })}
    </div>
  </div>
);
