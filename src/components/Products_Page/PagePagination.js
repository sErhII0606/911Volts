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
  const handleClick = (pageSetPage) => {
    dispatch(setPage(pageSetPage));
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  if (isLoading) {
    return <Spinner />;
  }
  let pageArray = [];
  for (let i = 1; i <= numOfPages; i++) {
    pageArray.push(i);
  }
  return (
    <div>
      {
        <Pagination>
          <Pagination.First onClick={() => handleClick(1)} />
          <Pagination.Prev
            onClick={() => {
              if (page <= 1) {
                return;
              }
              handleClick(page - 1);
            }}
          />
          {pageArray.map((pageNumber, i) => {
            if (pageNumber == page) {
              return (
                <Pagination.Item
                  key={i}
                  active
                  onClick={() => handleClick(pageNumber)}
                >
                  {pageNumber}
                </Pagination.Item>
              );
            } else if (page == 1 && pageNumber <= 3) {
              return (
                <Pagination.Item
                  key={i}
                  onClick={() => handleClick(pageNumber)}
                >
                  {pageNumber}
                </Pagination.Item>
              );
            } else if (
              page == pageArray.length &&
              pageNumber >= pageArray.length - 2
            ) {
              return (
                <Pagination.Item
                  key={i}
                  onClick={() => handleClick(pageNumber)}
                >
                  {pageNumber}
                </Pagination.Item>
              );
            } else if (pageNumber >= page - 1 && pageNumber <= page + 1) {
              return (
                <Pagination.Item
                  key={i}
                  onClick={() => handleClick(pageNumber)}
                >
                  {pageNumber}
                </Pagination.Item>
              );
            } else {
              return;
            }
          })}
          <Pagination.Next
            onClick={() => {
              if (page >= numOfPages) {
                return;
              }
              handleClick(page + 1);
            }}
          />
          <Pagination.Last onClick={() => handleClick(numOfPages)} />
        </Pagination>
      }
      <ProductPerPage />
    </div>
  );
};

export default PagePagination;
