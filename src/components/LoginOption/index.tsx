import React from "react";
import Link from "next/link";

import { Container, Account, Text, AppHeader, AppStore } from "./styles";

interface Props {
  login: boolean;
}

const LoginOption: React.FC<Props> = ({ login }) => {
  return (
    <Container>
      <Account>
        <Text>{login ? "Don't have an account?" : "Have an account?"}</Text>

        {login ? (
          <Link href="/signin">
            <a> Sign up</a>
          </Link>
        ) : (
          <Link href="/">
            <a> Log in</a>
          </Link>
        )}
      </Account>
      <AppHeader>Get the app.</AppHeader>
      <AppStore>
        <Link href="/">
          <a>
            <img src="/appStore.png" alt="Instagram on App Store" />
          </a>
        </Link>
        <Link href="/">
          <a>
            <img src="/playStore.png" alt="Instagrm on Play Store" />
          </a>
        </Link>
      </AppStore>
    </Container>
  );
};

export default LoginOption;
