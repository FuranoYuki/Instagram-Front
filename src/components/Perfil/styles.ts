import styled, { css } from "styled-components";

import { UserCheck, EllipsisH, KeyboardArrowDown } from "../../styles/Icons";

export const Container = styled.div`
  position: relative;

  width: 100%;
  margin-top: 55px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin: auto;

  @media (min-width: 735px) {
    padding: 30px 20px;
    max-width: 975px;
  }
`;

export const Top = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 16px 16px 24px 16px;

  @media (min-width: 735px) {
    margin-bottom: 40px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  flex-shrink: 0;
  flex-basis: 0;

  margin-right: 20px;

  @media (min-width: 735px) {
    flex-grow: 1;
    margin-right: 30px;
  }
`;

export const ImgBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  border: 1px solid var(--border-color);
`;

export const ImgPerfil = styled.img`
  height: 77px;
  width: 77px;
  margin: 4px;
  border-radius: 50%;

  @media (min-width: 735px) {
    height: 150px;
    width: 150px;
  }
`;

export const PerfilInfo = styled.div`
  display: flex;
  flex-grow: 2;
  flex-shrink: 1;
  flex-basis: 30px;
  flex-direction: column;
`;

export const InfoHeader = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;

  margin-bottom: 20px;

  color: var(--black-text);
`;

export const Name = styled.div`
  font-size: 28px;
  order: 1;
  line-height: 32px;
  color: inherit;
`;

export const Actions = styled.div`
  display: flex;
  gap: 8px;
  order: 2;

  color: inherit;

  @media (max-width: 735px) {
    order: 3;
    width: 100%;
  }
`;

interface MessageInterface {
  following?: boolean;
}

export const Message = styled.button<MessageInterface>`
  height: 30px;
  padding: ${(props) => (props.following ? "5px 9px" : "0 20px")};
  border-radius: 4px;

  font-size: 14px;
  line-height: 18px;
  font-weight: 600;

  color: ${(props) => (props.following ? "inherit" : "var(--white-color)")};

  background-color: ${(props) =>
    props.following ? "transparent" : "var(--blue-color)"};
  border: ${(props) =>
    props.following
      ? "1px solid var(--border-color)"
      : "1px solid var(--blue-color)"};

  &:hover {
    cursor: pointer;
  }
`;

export const FollowCheck = styled.button`
  height: 30px;
  padding: 0 30px;
  border-radius: 4px;

  color: inherit;
  background-color: transparent;
  border: 1px solid var(--border-color);

  &:hover {
    cursor: pointer;
  }
`;

export const FollowIcon = styled(UserCheck)`
  height: 14px;
  color: inherit;
`;

interface ArrowInterface {
  following?: boolean;
}

export const Arrow = styled.button<ArrowInterface>`
  text-align: center;

  height: 30px;
  width: 34px;
  border-radius: 4px;

  color: ${(props) => (props.following ? "inherit" : "var(--white-color)")};

  background-color: ${(props) =>
    props.following ? "transparent" : "var(--blue-color)"};
  border: ${(props) =>
    props.following
      ? "1px solid var(--border-color)"
      : "1px solid var(--blue-color)"};

  &:hover {
    cursor: pointer;
  }
`;

export const ArrowIcon = styled(KeyboardArrowDown)`
  height: 16px;
  width: 18px;

  color: inherit;
`;

export const Settings = styled.button`
  border: none;
  order: 3;
  flex-wrap: nowrap;

  color: inherit;
  background-color: transparent;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 735px) {
    order: 2;
  }
`;

export const SettIcon = styled(EllipsisH)`
  height: 22px;
  width: 22px;

  color: inherit;
`;

export const InfoDatas = styled.div`
  display: none;
  gap: 50px;

  margin-bottom: 20px;
  font-size: 16px;
  line-height: 18px;

  @media (min-width: 735px) {
    display: flex;
  }
`;

export const DataTopic = styled.div`
  color: var(--black-text);

  > span {
    font-weight: 600;
  }
`;

const BioProps = css`
  display: none;
  gap: 5px;
  flex-direction: column;
  justify-content: flex-start;
  font-size: 14px;
  line-height: 20px;
`;

export const Bio = styled.div`
  ${BioProps};
  margin-bottom: 40px;

  > a {
    font-weight: 600;
    color: rgb(0, 55, 107);
  }

  @media (min-width: 736px) {
    display: flex;
  }
`;

export const BioMobile = styled.div`
  ${BioProps};
  padding: 0 16px 21px;

  > a {
    font-weight: 600;
    color: rgb(0, 55, 107);
  }

  @media (max-width: 735px) {
    display: flex;
  }
`;

export const Nickname = styled.div``;

export const Resume = styled.div``;
