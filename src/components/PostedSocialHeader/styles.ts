import styled from "styled-components";
import { EllipsisH } from "../../styles/Icons";

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 14px;

  height: 72px;
  width: 100%;
  padding: 16px;

  border-left: 1px solid rgb(239, 239, 239);
  border-bottom: 1px solid rgb(239, 239, 239);
`;

export const PerfilImg = styled.div`
  height: 34px;
  width: 34px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid black;
`;

export const Perfil = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
`;

export const PerfilLink = styled.div`
  > a {
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    color: var(--black-text);
  }

  > a:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const Option = styled.div`
  padding: 5px;
`;

export const OptionIcon = styled(EllipsisH)`
  height: 16px;
  width: 16px;
  color: var(--black-text);
  cursor: pointer;
`;
