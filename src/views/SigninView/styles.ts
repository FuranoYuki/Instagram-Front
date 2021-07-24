import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: var(--body-background);

  > main {
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 350px;
  }
`;
