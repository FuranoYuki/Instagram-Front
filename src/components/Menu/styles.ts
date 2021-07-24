import styled, { css } from "styled-components";

import { Home } from "../../styles/Icons";
import { PaperPlane } from "../../styles/Icons";
import { Compass } from "../../styles/Icons";
import { Heart } from "../../styles/Icons";
import { UserCircle } from "../../styles/Icons";

// dropdown
import { DropwUser } from "../../styles/Icons";
import { Bookmark } from "../../styles/Icons";
import { GearWide } from "../../styles/Icons";
import { Autorenew } from "../../styles/Icons";

export const Container = styled.div`
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  gap: 15px;

  align-items: center;
  justify-content: flex-end;
`;

export const MenuIcons = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const IconsCss = css`
  height: 27px;
  width: 27px;
  color: var(--black-text);
`;

export const HomeIcon = styled(Home)`
  ${IconsCss}
`;

export const InboxIcon = styled(PaperPlane)`
  ${IconsCss}
`;

export const CompassIcon = styled(Compass)`
  ${IconsCss}
`;

export const HeartIcon = styled(Heart)`
  ${IconsCss}
`;

export const PerfilBox = styled.div`
  position: relative;
  &:hover {
    cursor: pointer;
  }
`;

export const Perfil = styled(UserCircle)`
  ${IconsCss};
  color: var(--border-color);
  border-radius: 50%;
  padding: 1px;
`;

export const Dropdown = styled.div`
  display: none;
  flex-direction: column;

  position: absolute;
  top: 40px;
  right: -35px;
  width: 230px;
  border-radius: 6px;

  background-color: var(--white-color);
  box-shadow: 0 0 5px 1px var(--box-shadow);

  > *:last-child {
    border-top: 1px solid var(--border-color);
    padding: 12px 16px;
  }
`;

export const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding: 9px 16px;

  > a {
    display: flex;
    align-items: center;
    gap: 15px;

    width: 100%;
  }

  &:hover {
    background-color: var(--body-background);
  }
`;

const DropdowIcons = css`
  height: 18px;
  width: 18px;
`;

export const DWUser = styled(DropwUser)`
  ${DropdowIcons}
`;

export const DwBookmark = styled(Bookmark)`
  ${DropdowIcons}
`;

export const DWGearWide = styled(GearWide)`
  ${DropdowIcons}
`;

export const DWAutorenew = styled(Autorenew)`
  ${DropdowIcons}
`;

export const DWTitle = styled.div`
  display: flex;
  flex-grow: 1;

  font-size: 14px;
  line-height: 18px;
`;
