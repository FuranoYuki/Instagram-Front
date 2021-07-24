import styled, { css } from "styled-components";
import {
  Heart,
  CommentGallery,
  PaperPlane,
  Bookmark,
} from "../../styles/Icons";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 8px 16px 8px 16px;
  border-top: 1px solid var(--navbar-border);
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = css`
  height: 26px;
  width: 26px;
  cursor: pointer;
  color: var(--black-text);
`;

export const HeartIcon = styled(Heart)`
  ${Icon}
`;

export const CommentIcon = styled(CommentGallery)`
  ${Icon}
`;

export const ShareIcon = styled(PaperPlane)`
  ${Icon}
`;

export const BookIcon = styled(Bookmark)`
  ${Icon}
`;

export const Likes = styled.section`
  display: flex;
  gap: 5px;

  padding: 0 16px;
  margin-bottom: 4px;

  > p {
    font-size: 14px;
    line-height: 18px;

    > span {
      font-weight: 600;
    }
  }
`;

export const User = styled.div`
  height: 20px;
  width: 20px;
  overflow: hidden;
  border-radius: 50%;
`;

export const PostedAt = styled.div`
  padding: 0 16px;
  margin-bottom: 5px;

  font-size: 10px;
  line-height: 18px;
  letter-spacing: 0.2px;
  color: var(--gray-text);
`;
