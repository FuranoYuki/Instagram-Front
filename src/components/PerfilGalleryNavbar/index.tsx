import React from "react";

import {
  Container,
  Nav,
  NavDesktop,
  ItemDesktop,
  PostIconDesktop,
  TaggedIconDesktop,
  NavMobile,
  ItemMobile,
  PostIconMobile,
  TaggedIconMobile,
} from "./styles";

const PerfilGalleryNavbar: React.FC = () => {
  return (
    <Container>
      <Nav>
        <NavDesktop>
          <ItemDesktop active>
            <PostIconDesktop />
            <span>POSTS</span>
          </ItemDesktop>
          <ItemDesktop>
            <TaggedIconDesktop />
            <span>TAGGED</span>
          </ItemDesktop>
        </NavDesktop>
        <NavMobile>
          <ItemMobile>
            <PostIconMobile active />
          </ItemMobile>
          <ItemMobile>
            <TaggedIconMobile />
          </ItemMobile>
        </NavMobile>
      </Nav>
    </Container>
  );
};

export default PerfilGalleryNavbar;
