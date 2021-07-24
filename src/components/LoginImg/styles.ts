import styled, { css } from "styled-components";

export const Container = styled.div`
  display: none;
  align-self: center;

  height: 618px;
  flex-basis: 454px;

  background-image: url("/Login/base.png");
  background-size: 454px 618px;
  background-position-x: 0 0;

  @media (min-width: 875px) {
    display: flex;
  }
`;

export const Imgs = styled.div`
  display: flex;
  flex-direction: column;

  margin: 99px 0 0 151px;
  position: relative;
`;

const imagesCss = css`
  height: 427px;
  width: 240px;

  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 1.5s ease-in;
`;

export const ImgBox1 = styled.div`
  ${imagesCss};
  opacity: 1;
  z-index: 2;
`;

export const ImgBox2 = styled.div`
  ${imagesCss}
`;

export const ImgBox3 = styled.div`
  ${imagesCss}
`;

export const ImgBox4 = styled.div`
  ${imagesCss}
`;

export const ImgBox5 = styled.div`
  ${imagesCss}
`;
