import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--body-background);
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 52px;
`;

export const Topics = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  margin-top: 24px;

  > a {
    color: var(--gray-text);
    font-size: 12px;
    line-height: 14px;
    margin: 12px 8px;
  }
`;

export const Copy = styled.div`
  display: flex;
  justify-content: center;

  margin: 12px 0;
  font-size: 12px;
  line-height: 14px;
`;

export const Languange = styled.div``;

export const Copyright = styled.div`
  color: var(--gray-text);
`;
