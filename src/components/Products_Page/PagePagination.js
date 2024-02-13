import { Spinner } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";
import { useDispatch, useSelector } from "react-redux";
import {
  setPage,
  prevPage,
  nextPage,
} from "../../features/AllProducts/allProductsSlice";

const PagePagination = ({ products, isLoading }) => {
  const { page, pages } = useSelector((store) => store.allProducts);
  const dispatch = useDispatch();
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Pagination>
      <Pagination.Ellipsis />
      <Pagination.First onClick={() => dispatch(setPage(1))} />
      <Pagination.Prev onClick={() => dispatch(prevPage(page))} />
      {pages.map((pageNumber, i) => {
        if (page === pageNumber) {
          return (
            <Pagination.Item
              key={i}
              active
              onClick={() => dispatch(setPage(pageNumber))}
            >
              {pageNumber}
            </Pagination.Item>
          );
        }
        return (
          <Pagination.Item
            key={i}
            onClick={() => dispatch(setPage(pageNumber))}
          >
            {pageNumber}
          </Pagination.Item>
        );
      })}

      <Pagination.Next onClick={() => dispatch(nextPage(page))} />
      <Pagination.Last
        onClick={() => dispatch(setPage(pages[pages.length - 1]))}
      />
    </Pagination>
  );
};

export default PagePagination;
