import styled from "styled-components";

const Wrapper = styled.section`
  .content {
    position: relative;
    margin: auto;
    opacity: 0.8;
  }
  .content:hover {
    opacity: 1;
  }
  .content-img {
    padding: 1rem 1.5rem;

    margin: auto;
    height: 260px;
    width: 260px;
  }
  .center {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .content-text {
    position: absolute;
    color: white;
    text-shadow: 2px 2px 4px #000000;
    top: 50%;
    width: 100%;
    text-align: center;
    font-size: 22px;
  }
  @media (min-width: 992px) {
    .categories {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 1rem;
      padding: 70px;
    }
  }
`;

export default Wrapper;
