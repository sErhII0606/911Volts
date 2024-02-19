import styled from "styled-components";
const Wrapper = styled.section`
  .single-order-container {
    display: flex;
  }
  .single-item-img {
    width: 55px;
    height: 55px;
    margin-right: 25px;
    cursor: pointer;
  }
  .quantity-text {
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .single-item {
    position: relative;
  }
`;
export default Wrapper;
