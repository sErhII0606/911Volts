import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products/Products";
import Error from "./pages/Error";
import SingleProduct from "./pages/Products/SingleProduct";
import SharedLayout from "./pages/SharedLayout";
import Login from "./pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import SharedProducts from "./pages/Products/SharedProducts";
import SharedCategories from "./pages/Categories/SharedCategories";
import Categories from "./pages/Categories/Categories";
import SingleCategory from "./pages/Categories/SingleCategory";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserDashboard from "./pages/dashboard/UserDashboard";
import ProtectedRout from "./pages/ProtectedRout";
import SharedLayoutUser from "./pages/dashboard/SharedLayoutUser";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderHistory from "./pages/dashboard/OrderHistory";
import MainCategories from "./pages/Categories/MainCategories";
import Order from "./pages/dashboard/Order";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<SharedProducts />}>
            <Route index element={<Products />} />
            <Route path=":productId" element={<SingleProduct />} />
          </Route>
          <Route path="categories" element={<SharedCategories />}>
            <Route index element={<MainCategories />} />
            <Route path=":category" element={<SingleCategory />} />
          </Route>
          <Route path="login" element={<Login></Login>} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="guest_order/:orderId" element={<Order />} />
          <Route
            path="user"
            element={
              <ProtectedRout>
                <SharedLayoutUser />
              </ProtectedRout>
            }
          >
            <Route index element={<UserDashboard />} />
            <Route path="order_history" element={<OrderHistory />} />
            <Route path="order_history/:orderId" element={<Order />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      <ToastContainer position="top-center" />
    </BrowserRouter>
  );
}

export default App;
