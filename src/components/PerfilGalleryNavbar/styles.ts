import styled, { css } from "styled-components";
import { Table, UserPin } from "../../styles/Icons";

export const Container = styled.div``;

export const Nav = styled.div`
  width: 100%;
`;

export const NavDesktop = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;

  width: 100%;
  border-top: 1px solid var(--border-color);

  > *:last-child {
    cursor: not-allowed;
  }

  @media (max-width: 735px) {
    display: none;
  }
`;

interface ItemInterface {
  active?: boolean;
}

export const ItemDesktop = styled.div<ItemInterface>`
  display: flex;
  align-items: center;
  gap: 6px;

  height: 52px;
  border-top: ${(props) =>
    props.active ? "1px solid var(--black-text)" : "none"};

  > span {
    font-size: 12px;
    font-weight: 600;
    line-height: 18px;
    text-transform: uppercase;

    color: ${(props) =>
      props.active ? "var(--black-text)" : "var(--gray-text)"};
  }

  cursor: pointer;
`;

const IconsDesktop = css`
  height: 12px;
  width: 12px;
`;

export const PostIconDesktop = styled(Table)`
  ${IconsDesktop}
`;

export const TaggedIconDesktop = styled(UserPin)`
  ${IconsDesktop}
`;

export const NavMobile = styled.ul`
  display: flex;

  border-top: 1px solid var(--border-color);

  > *:last-child {
    cursor: not-allowed;
  }

  @media (min-width: 735px) {
    display: none;
  }
`;

export const ItemMobile = styled.li`
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  align-items: center;
  justify-content: center;

  height: 44px;

  cursor: pointer;
  list-style: none;
`;

interface IconMobielInterface {
  active?: boolean;
}

const IconMobile = css`
  height: 32px;
  width: 32px;
`;

export const PostIconMobile = styled(Table)<IconMobielInterface>`
  ${IconMobile};
  color: ${(props) => (props.active ? "#0095f6" : "var(--gray-text)")};
`;

export const TaggedIconMobile = styled(UserPin)<IconMobielInterface>`
  ${IconMobile}
  color: ${(props) => (props.active ? "#0095f6" : "var(--gray-text)")}
`;
