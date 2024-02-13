import styled from "styled-components";

const Wrapper = styled.section`
  .footer {
    background-color: #92a8d1;
    position: sticky;
    left: 0;
    bottom: 0;
    width: 100%;
    margin: auto;
  }
  .row {
    margin: 0;
    align-items: center;
  }

  @media (min-width: 992px) {
    .row {
      display: grid;

      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      padding: 70px;
    }
  }
`;

export default Wrapper;
