import styled from 'styled-components';

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
    margin: 55px auto 0;
    padding-bottom: 32px;
  }
`;