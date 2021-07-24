import React, { useRef } from "react";
import Link from "next/link";

import api from "../../service/http";
import { login } from "../../service/token";
import {
  Container,
  Form,
  Brand,
  Inputs,
  Label,
  Input,
  LogIn,
  Or,
  Facebook,
  FacebookIcon,
  WarningError,
  ForgotPass,
} from "./styles";

const LoginForm: React.FC = () => {
  const warning = useRef<HTMLDivElement>(null);
  const formButton = useRef<HTMLButtonElement>(null);
  const inputEmail = useRef<HTMLInputElement>(null);
  const inputPassword = useRef<HTMLInputElement>(null);

  const showPassword = (e: React.MouseEvent | React.KeyboardEvent) => {
    const obj = e.currentTarget as HTMLDivElement;
    const input = inputPassword.current as HTMLInputElement;

    if (obj.innerText === "Show") {
      obj.innerText = "Hide";
      input.type = "password";
    } else {
      obj.innerText = "Show";
      input.type = "text";
    }
  };

  const handlerFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = inputEmail.current.value;
    const password = inputPassword.current.value;

    try {
      const res = await api.post("/loginUser", {
        email,
        password,
      });

      login(res.data.token);
      console.log(res.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const handlerInputChange = () => {
    if (
      inputEmail.current.value.length > 0 &&
      inputPassword.current.value.length >= 6
    ) {
      formButton.current.disabled = false;
    } else {
      formButton.current.disabled = true;
    }
  };

  return (
    <Container>
      <Brand src="/brand.png" />
      <Form onSubmit={handlerFormSubmit} method="POST">
        <Inputs>
          <Label htmlFor="email">
            <Input
              type="email"
              name="email"
              id="email"
              ref={inputEmail}
              onChange={handlerInputChange}
            />
          </Label>
          <Label htmlFor="password">
            <Input
              type="password"
              name="password"
              id="password"
              ref={inputPassword}
              onChange={handlerInputChange}
            />
            <div
              onClick={showPassword}
              onKeyDown={showPassword}
              role="button"
              tabIndex={0}
            >
              Show
            </div>
          </Label>
        </Inputs>
        <LogIn type="submit" disabled={true} ref={formButton}>
          Log In
        </LogIn>
        <Or>
          <div></div>
          <span>OR</span>
          <div></div>
        </Or>
        <Facebook>
          <FacebookIcon />
          <Link href="/">
            <a>Log in with Facebook</a>
          </Link>
        </Facebook>
      </Form>
      <WarningError ref={warning} />
      <ForgotPass>
        <Link href="/">
          <a>Forgot password?</a>
        </Link>
      </ForgotPass>
    </Container>
  );
};

export default LoginForm;
