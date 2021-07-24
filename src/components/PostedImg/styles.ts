import styled, { css } from "styled-components";
import { ChevronLeftCircle, ChevronRightCircle } from "../../styles/Icons";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 815px;
  width: 100%;
  border-radius: 3px;

  border: 1px solid var(--navbar-border);
  background-color: var(--white-color);

  @media (max-width: 736px) {
    max-width: none;
  }
`;

interface WrapperInteface {
  feed?: boolean;
}

export const Wrapper = styled.div<WrapperInteface>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 100%;

  @media (min-width: 736px) {
    flex-direction: ${(props) => (props.feed ? "column" : "row")};
  }
`;

interface ImgSectionInterface {
  feed?: boolean;
}

export const ImgSection = styled.div<ImgSectionInterface>`
  position: relative;
  width: 100%;
  height: 500px;

  display: flex;
  flex-grow: 1;

  @media (min-width: 735px) {
    width: ${(props) => (props.feed ? "100%" : "480px")};
    height: 600px;
  }
`;

const Icons = css`
  width: 30px;
  height: 30px;
  cursor: pointer;
  color: var(--body-background);
  z-index: 4;
`;

export const Left = styled.div``;

export const LeftIcon = styled(ChevronLeftCircle)`
  ${Icons}
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
`;

export const Right = styled.div``;

export const RightIcon = styled(ChevronRightCircle)`
  ${Icons}
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;

export const ImgBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  > div {
    height: 100%;
    flex-shrink: 0;
  }
`;
