import React from "react";

import SigninForm from "../../components/SigninForm";
import LoginOption from "../../components/LoginOption";
import Footer from "../../components/Footer";

import { Container } from "./styles";

const SigninView: React.FC = () => {
  return (
    <Container>
      <main>
        <SigninForm />
        <LoginOption login={false} />
      </main>
      <Footer />
    </Container>
  );
};

export default SigninView;
