import styled from "styled-components";
const Wrapper = styled.section`
  .openbtn {
    font-size: 20px;
    cursor: pointer;
    background-color: #111;
    color: white;
    padding: 10px 15px;
    border: none;
  }

  .openbtn:hover {
    background-color: #444;
  }
  .cart-container {
    padding: 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .login {
    padding: 10px;
    display: flex;
    align-items: center;
  }
  .user-icon:hover {
    color: blue;
  }
  .icon {
    width: 27px;
    height: 30px;
  }
  .cart-container:hover {
    color: blue;
  }
`;
export default Wrapper;
