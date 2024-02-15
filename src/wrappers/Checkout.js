import styled from "styled-components";

const Wrapper = styled.section`
  .cart {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
  }
  .row {
    display: grid;
    flex-wrap: wrap;
    margin: 0 -16px;
    grid-template-columns: 65% 35%;
  }
  .container-row {
    display: grid;
    flex-wrap: wrap;
    margin: 0 -16px;
    grid-template-columns: 1fr;
  }

  .col-25 {
  }

  .div-col-50 {
  }
  .col-50 {
  }
  .col-75 {
  }

  .col-25,
  .col-50,
  .col-75 {
    padding: 0 16px;
  }
  @media (min-width: 1050px) {
    .row {
      display: grid;
      flex-wrap: wrap;
      margin: 0 -16px;
      grid-template-columns: 75% 25%;
    }
    .container-row {
      display: grid;
      flex-wrap: wrap;
      margin: 0 -16px;
      grid-template-columns: 1fr 1fr;
    }
    .div-col-50 {
    }
    .col-25 {
    }

    .col-75 {
    }
  }
  .container {
    background-color: #f2f2f2;
    padding: 5px 20px 15px 20px;
    border: 1px solid lightgrey;
    border-radius: 3px;
  }

  input[type="text"] {
    width: 100%;
    margin-bottom: 20px;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }

  label {
    margin-bottom: 10px;
    display: block;
  }

  .icon-container {
    margin-bottom: 20px;
    padding: 7px 0;
    font-size: 24px;
  }

  .btn {
    background-color: #04aa6d;
    color: white;
    padding: 12px;
    margin: 10px 0;
    border: none;
    width: 100%;
    border-radius: 3px;
    cursor: pointer;
    font-size: 17px;
  }

  .btn:hover {
    background-color: #45a049;
  }

  a {
    color: #2196f3;
  }

  hr {
    border: 1px solid lightgrey;
  }
  .btn-container {
    position: absolute;
  }
  .cart-item {
    height: 6rem;
  }
  span.price {
    float: right;
    color: grey;
  }
`;

export default Wrapper;
