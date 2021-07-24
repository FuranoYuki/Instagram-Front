import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Gallery = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  width: 100%;

  @media (min-width: 735px) {
    gap: 28px;
  }
`;

export const Column = styled.div`
  display: flex;
  gap: 3px;

  width: 100%;

  @media (min-width: 735px) {
    gap: 28px;
  }
`;

export const GalleryImgBox = styled.div`
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;

  max-width: calc(33.3% - 1.5px);

  @media (min-width: 735px) {
    max-width: calc(33% - 14px);
  }
`;
