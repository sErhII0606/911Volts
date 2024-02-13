import styled from "styled-components";

const Wrapper = styled.section`
  .product {
    max-width: 25rem;
  }
  .product-container {
    background-color: bisque;
  }
  .product-container-horizontal {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  .product-text {
    line-height: 2;
  }
  .price {
    text-shadow: #fc0 1px 0 10px;
    font-size: large;
    font-variant-numeric: slashed-zero;

    padding: 0.25rem 0.5rem;
    background-color: greenyellow;
    border-bottom-right-radius: 40%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .show-more {
    cursor: pointer;
    color: blueviolet;
  }
  .product-card-img {
    height: 290px;
  }
  .product-card-img-horizontal {
    margin: 10px;
    width: 290px;
  }
  .product-card-title {
    color: blueviolet;
    height: 100px;
  }
  .like {
    position: absolute;
    top: 0;
    right: 0;
  }
  .like-icon {
    height: 35px;
    width: 35px;
  }
  .like-full {
    position: absolute;
    top: 0;
    right: 0;
    opacity: 0;
  }
  like:hover {
    opacity: 0;
  }
  .like-full:hover {
    opacity: 1;
  }
  .like-icon-full {
    color: red;
    height: 35px;
    width: 35px;
  }
  .product-card-title:hover {
    color: burlywood;
  }
  .product-description {
    margin-bottom: 2rem;
  }
  .card-btn-container {
    padding-top: 25px;
    bottom: 0;
    position: absolute;
  }
  .add-to-cart-icon {
    cursor: pointer;
    color: blueviolet;
    height: 25px;
    width: 25px;
  }
  .add-to-cart-icon:hover {
    color: burlywood;
  }
  .show-more:hover {
    color: burlywood;
  }
`;

export default Wrapper;
