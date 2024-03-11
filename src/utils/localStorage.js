export const addUserToLocalStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem("user");
};

export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem("user");
  const user = result ? JSON.parse(result) : null;
  return user;
};
export const addCartToLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const removeCartFromLocalStorage = () => {
  localStorage.removeItem("cart");
};

export const getCartFromLocalStorage = () => {
  const result = localStorage.getItem("cart");
  const cart = result ? JSON.parse(result) : null;
  return cart;
};
export const addOrderToLocalStorage = (order) => {
  localStorage.setItem("order", JSON.stringify(order));
};

export const removeOrderFromLocalStorage = () => {
  localStorage.removeItem("order");
};

export const getOrderFromLocalStorage = () => {
  const result = localStorage.getItem("order");
  const order = result ? JSON.parse(result) : null;
  return order;
};
