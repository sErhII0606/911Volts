import styled from "styled-components";
const Wrapper = styled.section`
  .openbtn {
    font-size: 20px;
    cursor: pointer;
    background-color: #111;
    color: white;
    padding: 10px 15px;
    border: none;
    margin: auto;
  }
  .navbar-links {
    display: flex;
  }
  .openbtn:hover {
    background-color: #444;
  }
  .cart-container {
    padding-right: 15px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .search {
    margin: auto;
  }
  .login {
    padding-right: 10px;
    cursor: pointer;
    align-items: center;
  }
  .user-icon:hover {
    color: blue;
  }
  .cart-container:hover {
    color: blue;
  }
  .icon {
    width: 27px;
    height: 30px;
  }
  .icons {
    display: flex;
    position: absolute;
    right: 15px;
  }
  .sidebar-btn {
    position: absolute;
    left: 15px;
  }
  .logo {
    height: 60px;
    padding-left: 35px;
    padding-right: 35px;
  }
  .nav-link {
    text-align: center;
    padding-top: 15px;
  }
  .nav-link:hover {
    background-color: darkgray;
  }
`;
export default Wrapper;
