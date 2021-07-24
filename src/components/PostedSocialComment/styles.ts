import styled from "styled-components";
import { Heart } from "../../styles/Icons";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 15px;
  width: 100%;
  padding: 17px;
`;

export const Left = styled.div`
  display: flex;
  flex-shrink: 1;
`;

export const ImgBox = styled.div`
  display: flex;

  height: 32px;
  width: 32px;

  overflow: hidden;
  border-radius: 50%;

  cursor: pointer;
`;

export const Right = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;

export const Comment = styled.div`
  display: flex;

  font-size: 14px;
  line-height: 18px;
  color: var(--black-text);

  > div > a {
    margin-right: 5px;

    color: inherit;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const HeartIcon = styled(Heart)`
  display: flex;
  flex-shrink: 0;
  height: 12px;
  width: 12px;
  margin-left: 10px;
  color: var(--black-text);
  cursor: pointer;
`;

export const Info = styled.div`
  display: flex;
  gap: 10px;

  font-size: 12px;
  line-height: 14px;
  margin-top: 16px;
  margin-bottom: 4px;
  color: var(--gray-text);

  > span {
    font-weight: 600;
  }
`;

export const Like = styled.div``;
