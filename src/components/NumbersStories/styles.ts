import styled from "styled-components";

export const Container = styled.div``;

export const Stories = styled.div`
  display: flex;
  gap: 15px;

  height: 88px;
  margin-bottom: 21px;

  @media (min-width: 735px) {
    gap: 50px;

    height: 130px;
    padding-left: 48px;
    margin-bottom: 44px;
  }
`;

export const Storie = styled.div`
  width: 56px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  > span {
    text-align: center;
    color: var(--black--text);
    font-size: 12px;
    line-height: 18ox;
  }

  @media (min-width: 735px) {
    width: 77px;
    gap: 10px;

    > span {
      font-size: 14px;
      font-weight: 600;
    }
  }
`;

export const StorieBorder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border-color);
  border-radius: 50%;
`;

export const StorieImg = styled.div`
  width: 56px;
  height: 56px;
  margin: 2px;
  border-radius: 50%;
  background-color: gray;

  @media (min-width: 735px) {
    width: 77px;
    height: 77px;
    margin: 3px;
  }
`;

export const SocialData = styled.ul`
  display: flex;
  justify-content: space-around;

  padding: 12px 0;
  border-top: 1px solid var(--border-color);

  font-size: 14px;
  line-height: 18px;
  font-weight: 600;

  color: var(--black-text);

  @media (min-width: 735px) {
    display: none;
  }
`;

export const SocialDataItem = styled.li`
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  flex-direction: column;

  list-style: none;
  font-size: 14px;
  text-align: center;

  > *:last-child {
    font-weight: 400;

    color: var(--gray-text);
  }
`;
