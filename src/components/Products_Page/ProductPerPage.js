import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductsPerPage } from "../../features/AllProducts/allProductsSlice";
const ProductPerPage = () => {
  const { productsPerPage } = useSelector((store) => store.allProducts);
  const dispatch = useDispatch();
  return (
    <div>
      <select
        name="productsPerPage"
        id="productsPerPage-select"
        onChange={(e) => {
          if (!e.target.value || e.target.value == 0) return;
          dispatch(setProductsPerPage(e.target.value));
        }}
      >
        <option value={0}>--Products per page--</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={40}>40</option>
        <option value={100}>100</option>
      </select>
    </div>
  );
};

export default ProductPerPage;
