import React from "react";
import LoginImg from "../../components/LoginImg";
import LoginForm from "../../components/LoginForm";
import LoginOption from "../../components/LoginOption";
import Footer from "../../components/Footer";

import { Container, Log } from "./styles";

const LogIn: React.FC = () => {
  return (
    <Container>
      <main>
        <LoginImg />
        <Log>
          <LoginForm />
          <LoginOption login={true} />
        </Log>
      </main>
      <Footer />
    </Container>
  );
};

export default LogIn;
