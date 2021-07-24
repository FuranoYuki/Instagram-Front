import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;

  background-color: var(--body-background);

  > main {
    display: flex;
    flex-shrink: 0;
    flex-grow: 1;
    flex-direction: column;
    align-items: center;

    max-width: 935px;
    margin: 0 auto;
    margin-top: 54px;
    margin-bottom: 16px;

    @media (min-width: 736px) {
      padding: 4vh 20px 0;
      width: calc(100% - 40px);
    }
  }
`;
