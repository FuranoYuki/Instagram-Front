import styled, { css } from "styled-components";
import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
  CloseOutline,
} from "../../styles/Icons";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
  z-index: 4;

  display: none;
  flex-direction: column;
  justify-content: center;

  width: 100vw;
  height: 100vh;
  padding: 0 40px;

  background-color: rgba(0, 0, 0, 0.5);
`;

export const Content = styled.div`
  width: 100%;
  max-width: 835px;
  max-height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;

  > span {
    height: 40px;
  }
`;

const Icons = css`
  height: 50px;
  width: 50px;
  color: var(--white-color);
  cursor: pointer;
  transform: translateY(-50%);
`;

export const Left = styled(KeyboardArrowLeft)`
  ${Icons}
  position: absolute;
  top: 50%;
  left: 0;
`;

export const Right = styled(KeyboardArrowRight)`
  ${Icons}
  position: absolute;
  top: 50%;
  right: 0;
`;

export const Button = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;

  cursor: pointer;
  border: none;
  background-color: transparent;
`;

export const CloseIcon = styled(CloseOutline)`
  height: 40px;
  width: 40px;
  color: var(--white-color);
`;
