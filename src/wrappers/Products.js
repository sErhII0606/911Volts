import styled from "styled-components";

const Wrapper = styled.section`
  section {
    padding: 20px;
  }
  .center {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .product {
    max-width: 25rem;
  }
  .product-title {
    font-weight: 500;
  }
  .product-text {
    line-height: 2;
  }
  .price {
    padding: 0.25rem 0.5rem;
  }
  .img {
    width: 100%;
    display: block;
    object-fit: cover;
  }
  .product-card-img {
    height: 220px;
  }
  .product-card-title {
    height: 100px;
  }
  .product-description {
    margin-bottom: 2rem;
  }
  .card-btn-container {
    padding-top: 25px;
    bottom: 0;
    position: absolute;
  }
  .container-img {
    height: 200px;
    width: 200px;
  }
  .page-pagination {
    margin-top: 100px;
    margin-bottom: -50px;
    display: flex;
    justify-content: center;
  }
  .products {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    align-items: center;
    justify-content: center;
  }
  @media (min-width: 1050px) {
    .products {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1rem;
    }
  }
  @media (min-width: 1370px) {
    .products {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 1rem;
    }
  }
  @media (min-width: 1720px) {
    .products {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      gap: 1rem;
    }
  }
`;

export default Wrapper;
