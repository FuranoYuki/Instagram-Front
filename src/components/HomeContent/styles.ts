import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;

  width: 100%;

  @media (min-width: 1000px) {
    max-width: 614px;
  }
`;
