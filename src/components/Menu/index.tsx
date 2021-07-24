import React from "react";
import Link from "next/link";

import {
  Container,
  MenuIcons,
  HomeIcon,
  InboxIcon,
  CompassIcon,
  HeartIcon,
  PerfilBox,
  Perfil,
  Dropdown,
  DropdownItem,
  DWUser,
  DwBookmark,
  DWGearWide,
  DWAutorenew,
  DWTitle,
} from "./styles";

const Menu: React.FC = () => {
  const showPerfil = (event: React.MouseEvent) => {
    const obj = event.currentTarget as HTMLDivElement;
    const svg = obj.firstElementChild as SVGAElement;
    const dropdown = obj.lastElementChild as HTMLDivElement;

    if (svg.style.border === "0px none") {
      svg.style.border = "1px solid black";
      dropdown.style.display = "flex";
    } else {
      svg.style.border = "0px none";
      dropdown.style.display = "none";
    }
  };

  return (
    <Container>
      <MenuIcons>
        <Link href="/">
          <a>
            <HomeIcon />
          </a>
        </Link>
      </MenuIcons>

      <MenuIcons>
        <Link href="/">
          <a>
            <InboxIcon />
          </a>
        </Link>
      </MenuIcons>

      <MenuIcons>
        <Link href="/">
          <a>
            <CompassIcon />
          </a>
        </Link>
      </MenuIcons>

      <MenuIcons>
        <Link href="/">
          <a>
            <HeartIcon />
          </a>
        </Link>
      </MenuIcons>

      <PerfilBox onClick={showPerfil}>
        <Perfil />

        <Dropdown>
          <DropdownItem>
            <Link href="/perfil">
              <a>
                <DWUser />
                <DWTitle>Profile</DWTitle>
              </a>
            </Link>
          </DropdownItem>
          <DropdownItem>
            <Link href="/">
              <a>
                <DwBookmark />
                <DWTitle>Saved</DWTitle>
              </a>
            </Link>
          </DropdownItem>
          <DropdownItem>
            <Link href="/">
              <a>
                <DWGearWide />
                <DWTitle>Settings</DWTitle>
              </a>
            </Link>
          </DropdownItem>
          <DropdownItem>
            <Link href="/">
              <a>
                <DWAutorenew />
                <DWTitle>Switch Accounts</DWTitle>
              </a>
            </Link>
          </DropdownItem>
          <DropdownItem>
            <Link href="/">
              <a>
                <DWTitle>Log Out</DWTitle>
              </a>
            </Link>
          </DropdownItem>
        </Dropdown>
      </PerfilBox>
    </Container>
  );
};

export default Menu;
