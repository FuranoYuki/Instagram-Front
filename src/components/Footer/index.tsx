import React from "react";
import Link from "next/link";

import {
  Container,
  Wrapper,
  Topics,
  Copy,
  Languange,
  Copyright,
} from "./styles";

const Footer: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Topics>
          <Link href="/">
            <a>About</a>
          </Link>
          <Link href="/">
            <a>Blog</a>
          </Link>
          <Link href="/">
            <a>Jobs</a>
          </Link>
          <Link href="/">
            <a>Help</a>
          </Link>
          <Link href="/">
            <a>API</a>
          </Link>
          <Link href="/">
            <a>Privacy</a>
          </Link>
          <Link href="/">
            <a>Terms</a>
          </Link>
          <Link href="/">
            <a>Top Accounts</a>
          </Link>
          <Link href="/">
            <a>Hashtags</a>
          </Link>
          <Link href="/">
            <a>Locations</a>
          </Link>
        </Topics>
        <Copy>
          <Languange>English</Languange>
          <Copyright>&copy;2021 Instagram from Facebook</Copyright>
        </Copy>
      </Wrapper>
    </Container>
  );
};

export default Footer;
