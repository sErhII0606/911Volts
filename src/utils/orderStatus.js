export const orderStatus = (paid, shipped, delivered) => {
  if (!paid && !shipped) {
    return { status: "Awaiting payment", progress: 25 };
  }
  if (paid && !shipped) {
    return { status: "Awaiting shipment", progress: 50 };
  }
  if (shipped && !delivered) {
    return { status: "Shipped", progress: 75 };
  }
  if (delivered) {
    return { status: "Delivered", progress: 100 };
  }
};
