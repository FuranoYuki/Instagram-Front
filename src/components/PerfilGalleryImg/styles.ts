import styled, { css } from "styled-components";
import {
  HeartGallery,
  CommentGallery,
  SlideMultiple,
} from "../../styles/Icons";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  position: relative;

  width: 100%;
`;

export const ImgBox = styled.div`
  position: relative;
  padding-top: 100%;
  width: 100%;
  height: 100%;

  > div {
    position: absolute !important;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const MultipleImg = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  margin: 5px;
`;

export const MultipleImgIcon = styled(SlideMultiple)`
  width: 22px;
  color: var(--white-color);
  transform: scaleX(-1);
`;

export const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.3);

    > div {
      display: flex;
    }
  }
`;

export const Social = styled.div`
  display: none;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0 30px;

  width: 100%;

  color: var(--white-color);
`;

export const Item = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 8px;

  font-weight: 600;
`;

const IconsCss = css`
  height: 20px;
  width: 20px;
`;

export const HeartIcon = styled(HeartGallery)`
  ${IconsCss}
`;

export const CommentIcon = styled(CommentGallery)`
  ${IconsCss}
`;
