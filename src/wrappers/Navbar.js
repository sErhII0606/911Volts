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
  .navbar-custom {
    margin-top: 15px;
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
  .navbar-icons_search {
    display: flex;
    height: 30px;
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
  .sidebar-btn {
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
