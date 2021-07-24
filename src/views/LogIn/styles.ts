import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-height: 100vh;
  background-color: var(--body-background);

  > main {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    max-width: 935px;
    margin: 32px auto 0;
    padding-bottom: 32px;
  }
`;

export const Log = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: none;
  margin-top: 12px;

  @media (min-width: 450px) {
    max-width: 350px;
  }
`;
