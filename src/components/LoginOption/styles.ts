import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Account = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 25px;
  margin: 15px 0;
  border: 1px solid var(--border-color);
  background-color: var(--white-color);

  > a {
    font-size: 14px;
    color: var(--blue-color);
  }

  @media (max-width: 450px) {
    background-color: transparent;
    border: none;
  }
`;

export const Text = styled.div`
  font-size: 14px;
  text-align: center;

  color: var(--black-text);
`;

export const AppHeader = styled.div`
  margin: 10px 20px;
  text-align: center;
  font-size: 14px;
  line-height: 18px;
  color: var(--black-text);
`;

export const AppStore = styled.div`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  gap: 10px;

  width: 100%;
  margin: 10px 0;

  > a > img {
    height: 40px;
  }
`;
