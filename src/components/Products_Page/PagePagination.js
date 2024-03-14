import { Spinner } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";
import { useDispatch, useSelector } from "react-redux";
import {
  setPage,
  setProductsPerPage,
} from "../../features/AllProducts/allProductsSlice";
import ProductPerPage from "./ProductPerPage";

const PagePagination = ({ isLoading }) => {
  const { numOfPages, page } = useSelector((store) => store.allProducts);
  const dispatch = useDispatch();
  if (isLoading) {
    return <Spinner />;
  }
  let pageArray = [];
  for (let i = 1; i <= numOfPages; i++) {
    pageArray.push(i);
  }
  return (
    <div>
      {pageArray.length == 1 ? (
        <div />
      ) : (
        <Pagination>
          <Pagination.Ellipsis />
          <Pagination.First
            onClick={() => {
              dispatch(setPage(1));
            }}
          />
          <Pagination.Prev
            onClick={() => {
              if (page <= 1) {
                return;
              }
              dispatch(setPage(page - 1));
            }}
          />
          {pageArray.map((pageNumber, i) => {
            if (pageNumber == page) {
              return (
                <Pagination.Item
                  key={i}
                  active
                  onClick={() => {
                    dispatch(setPage(pageNumber));
                  }}
                >
                  {pageNumber}
                </Pagination.Item>
              );
            } else {
              return (
                <Pagination.Item
                  key={i}
                  onClick={() => {
                    dispatch(setPage(pageNumber));
                  }}
                >
                  {pageNumber}
                </Pagination.Item>
              );
            }
          })}

          <Pagination.Next
            onClick={() => {
              if (page >= numOfPages) {
                return;
              }
              dispatch(setPage(page + 1));
            }}
          />
          <Pagination.Last
            onClick={() => {
              dispatch(setPage(numOfPages));
            }}
          />
        </Pagination>
      )}
      <ProductPerPage />
    </div>
  );
};

export default PagePagination;
