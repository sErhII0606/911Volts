import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductsPerPage } from "../../features/AllProducts/allProductsSlice";
const ProductPerPage = () => {
  const { productsPerPage } = useSelector((store) => store.allProducts);
  const dispatch = useDispatch();
  return (
    <div>
      <label htmlFor="productsPerPage-select">--Products per page--</label>
      <select
        name="productsPerPage"
        id="productsPerPage-select"
        onChange={(e) => {
          if (!e.target.value) return;
          dispatch(setProductsPerPage(e.target.value));
        }}
      >
        <option value={10} selected={productsPerPage == 10 ? true : false}>
          10
        </option>
        <option value={20} selected={productsPerPage == 20 ? true : false}>
          20
        </option>
        <option value={40} selected={productsPerPage == 40 ? true : false}>
          40
        </option>
        <option value={100} selected={productsPerPage == 100 ? true : false}>
          100
        </option>
      </select>
    </div>
  );
};

export default ProductPerPage;
