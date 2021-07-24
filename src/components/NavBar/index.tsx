import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  Container,
  Wrapper,
  BrandBox,
  Search,
  SearchIcon,
  SearchInput,
  Account,
  Login,
  Signup,
} from "./styles";

import Menu from "../Menu";

const NavBar: React.FC = () => {
  const [active, setActive] = useState(true);

  const searchClick = (event: React.MouseEvent) => {
    const obj = event.currentTarget as HTMLDivElement;
    const input = obj.lastElementChild as HTMLInputElement;

    input.style.flexGrow === ""
      ? (input.style.flexGrow = "1")
      : (input.style.flexGrow = "");

    if (input.style.flexGrow === "") input.blur();
  };

  return (
    <Container>
      <Wrapper>
        <BrandBox>
          <Link href="/">
            <a>
              <Image
                alt="instagram brand"
                src="/brand.png"
                height={29}
                width={103}
              />
            </a>
          </Link>
        </BrandBox>

        <Search onClick={searchClick}>
          <SearchIcon />
          <SearchInput placeholder="Search" />
        </Search>

        {active ? (
          <Menu />
        ) : (
          <Account>
            <Link href="/">
              <a>
                <Login>Log In</Login>
              </a>
            </Link>
            <Link href="/">
              <a>
                <Signup>Sign Up</Signup>
              </a>
            </Link>
          </Account>
        )}
      </Wrapper>
    </Container>
  );
};

export default NavBar;
