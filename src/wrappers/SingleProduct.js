import styled from "styled-components";

const Wrapper = styled.section`
  section {
    padding: 20px;
  }
  .img-container {
    justify-content: center;
  }
  .pagination-img {
    width: 100px;
    height: 60px;
    object-fit: contain;
  }
  .modal-content {
    width: 80rem;
    height: auto;
  }
  .pagination-img-container {
    padding: 5px;
    height: 7rem;
    width: auto;
    overflow: auto;
    scrollbar-color: rgb(177, 212, 243) transparent;
    scrollbar-width: thin;
  }
  .main-img {
    width: auto;
    height: 18rem;
    display: block;

    object-fit: contain;
  }
  .star-data {
    margin-left: 85px;
  }
  .product-info-container {
    position: relative;
  }
  .brand-title {
    margin-bottom: 0px;
  }
  .product-info {
    margin-top: 25px;
  }
  .star-container {
    position: absolute;
  }
  .gold {
    color: gold;
  }
  .star-hidden {
    opacity: 0;
  }
  .reviews-container {
    height: 25rem;
    overflow: auto;
    scrollbar-color: rgb(177, 212, 243) transparent;
    scrollbar-width: thin;
  }
  .customer-experience-btn-container {
  }
  .customer-experience-btn {
    margin-right: 10px;
  }
  .customer-experience-btn-disabled {
    pointer-events: none;
  }

  @media (min-width: 992px) {
    .product {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 7rem;
      padding: 15px;
    }
    .pagination-img-container {
    }
    .main-img {
      justify-content: center;
    }
  }
`;

export default Wrapper;
