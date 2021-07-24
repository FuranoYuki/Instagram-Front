import styled from "styled-components";

export const Container = styled.div`
  display: none;
  flex-direction: column;

  position: fixed;
  top: 88px;
  left: 684px;
  height: 100vh;
  margin-bottom: 30px;
  max-width: 293px;
  width: 100%;

  @media (min-width: 1001px) {
    display: flex;
  }
`;

export const UserAccount = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 10px;
  margin-top: 18px;

  > span {
    font-size: 12px;
    font-weight: 600;
    line-height: 14px;

    color: var(--blue-color);
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 0 10px;
`;

export const UserImg = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;

  background-color: var(--gray-text);
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 14px;
  line-height: 18px;

  color: var(--gray-text);

  > *:first-child {
    font-weight: 600;
    color: var(--black-text);
  }
`;

export const Suggestion = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 12px;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;

  color: var(--gray-text);

  > *:last-child {
    font-size: 12px;
    line-height: 14px;

    color: var(--black-text);
  }
`;

export const FollowList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px 0;

  padding-top: 15px;

  list-style: none;
`;

export const FollowSuggestion = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > span {
    font-size: 12px;
    font-weight: 600;
    line-height: 14px;

    cursor: pointer;
    color: var(--blue-color);
  }
`;

export const FollowLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0 10px;
`;

export const FollowImg = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--gray-text);
`;

export const FollowInfo = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 14px;
  font-weight: 600;
  line-height: 18px;

  color: var(--black-text);

  > *:first-child :hover {
    cursor: pointer;
    text-decoration: underline;
  }

  > *:last-child {
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    color: var(--gray-text);
  }
`;
