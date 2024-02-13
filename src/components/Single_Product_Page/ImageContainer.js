import { useState } from "react";
import { Image, Spinner } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";
import { setImgShown } from "../../features/singleProduct/singleProductSlice";
import { useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";
const ImageContainer = ({ product }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (!product.img) {
    return <Spinner />;
  }
  /*   let active = 2;
  let items = [];
  for (let number = 0; number <= product.img.length - 1; number++) {
    items.push(
      <Pagination.Item
        key={number}
        name={number}
        onClick={(e) => dispatch(setImgShown(e.target.name))}
      >
        <Image
          name={number}
          style={{ width: 100, height: 60 }}
          src={product?.img[number].imgLink}
          rounded
        />
      </Pagination.Item>
    );
  } */
  return (
    <div className="img-container">
      <Modal size="lg" show={show} onHide={handleClose}>
        <Image
          className="modal-img"
          src={product.img[product.imgShown].imgLink}
        />
      </Modal>
      <Image
        className="main-img"
        src={product.img[product.imgShown].imgLink}
        onClick={handleShow}
      />
      <div>
        {" "}
        <Pagination size="lg" className="pagination-img-container">
          {" "}
          {product.img.map((singleImg, number) => (
            <Pagination.Item
              key={number}
              name={number}
              onClick={(e) => dispatch(setImgShown(e.target.name))}
            >
              <Image
                name={number}
                className="pagination-img"
                src={singleImg.imgLink}
                rounded
              />
            </Pagination.Item>
          ))}
        </Pagination>
      </div>
    </div>
  );
};

export default ImageContainer;
