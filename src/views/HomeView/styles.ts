import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;

  > main {
    height: 100%;
    margin-top: 55px;
    background-color: var(--body-background);

    > section {
      display: flex;
      flex-grow: 1;
      flex-shrink: 0;
      gap: 0 30px;

      position: relative;
      margin: 0 auto;
      padding: 0;
      width: 100%;
      max-width: 935px;

      @media (min-width: 640px) {
        padding-top: 30px;
      }

      @media (max-width: 640px) {
        margin-bottom: 10px;
      }

      @media (max-width: 1000px) {
        max-width: 600px;
      }
    }
  }
`;
