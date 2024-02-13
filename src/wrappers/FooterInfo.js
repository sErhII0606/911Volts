import styled from "styled-components";

const Wrapper = styled.section`
  h3 {
    margin-top: 2rem;
    margin-bottom: 4rem;
  }
  .link-container {
    text-align: center;
  }
  @media (min-width: 992px) {
    .link-container {
      text-align: left;
      padding-left: 330px;
    }
  }
`;

export default Wrapper;
