import { Spinner } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";
import { useDispatch, useSelector } from "react-redux";

const PagePagination = ({ products, isLoading }) => {
  const { page, pages } = useSelector((store) => store.allProducts);
  const dispatch = useDispatch();
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Pagination>
      <Pagination.Ellipsis />
      <Pagination.First onClick={() => {}} />
      <Pagination.Prev onClick={() => {}} />
      <Pagination.Item active onClick={() => {}}>
        1
      </Pagination.Item>
      <Pagination.Item onClick={() => {}}>2</Pagination.Item>

      <Pagination.Next onClick={() => {}} />
      <Pagination.Last onClick={() => {}} />
    </Pagination>
  );
};

export default PagePagination;
