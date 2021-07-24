import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

import {
  Container,
  Form,
  Brand,
  Header,
  Facebook,
  FacebookIcon,
  LoginFace,
  Or,
  Inputs,
  Label,
  Input,
  Verify,
  Show,
  Signup,
  Agree,
} from "./styles";

const SigninForm: React.FC = () => {
  const [user, setUser] = useState("");
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const submitButton = useRef<HTMLButtonElement>(null);

  const handleFocus = (e: React.FocusEvent) => {
    const input = e.currentTarget as HTMLInputElement;
    const header = input.previousElementSibling as HTMLSpanElement;

    header.style.transform = "scale(.83333) translateY(-10px)";
  };

  const handleBlur = (e: React.FocusEvent) => {
    const input = e.currentTarget as HTMLInputElement;
    const header = input.previousElementSibling as HTMLSpanElement;

    if (input.value === "") {
      header.style.transform = "none";
    }
  };

  const handlerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(e);
  };

  const showPassword = (e: React.MouseEvent | React.KeyboardEvent) => {
    const obj = e.currentTarget as HTMLDivElement;
    const div = obj.previousElementSibling as HTMLDivElement;
    const input = div.previousElementSibling as HTMLInputElement;

    if (obj.innerText === "Show") {
      obj.innerText = "Hide";
      input.type = "password";
    } else {
      obj.innerText = "Show";
      input.type = "text";
    }
  };

  useEffect(() => {
    const button = submitButton.current as HTMLButtonElement;

    if (user !== "" && fullName !== "" && userName !== "" && password !== "") {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  }, [user, fullName, userName, password]);

  return (
    <Container>
      <Brand src="/brand.png" />
      <Form autoComplete="off" onSubmit={handlerSubmit} method="POST">
        <Header>Sign up to see photos and videos from your friends.</Header>
        <Facebook>
          <Link href="/">
            <a>
              <LoginFace>
                <FacebookIcon />
                <div>Log in with Facebook</div>
              </LoginFace>
            </a>
          </Link>
        </Facebook>
        <Or>
          <div></div>
          <span>OR</span>
          <div></div>
        </Or>
        <Inputs>
          <Label htmlFor="user">
            <span>Mobile Number or Email</span>
            <Input
              id="user"
              type="text"
              name="user"
              onBlur={handleBlur}
              onFocus={handleFocus}
              onChange={(e) => setUser(e.target.value)}
            />
            <Verify />
          </Label>
          <Label htmlFor="fullname">
            <span>Full Name</span>
            <Input
              id="fullname"
              type="text"
              name="fullname"
              onBlur={handleBlur}
              onFocus={handleFocus}
              onChange={(e) => setFullName(e.target.value)}
            />
            <Verify />
          </Label>
          <Label htmlFor="username">
            <span>Username</span>
            <Input
              id="username"
              type="text"
              name="username"
              autoComplete="new-email"
              onBlur={handleBlur}
              onFocus={handleFocus}
              onChange={(e) => setUserName(e.target.value)}
            />
            <Verify />
          </Label>
          <Label htmlFor="password">
            <span>Password</span>
            <Input
              id="password"
              type="password"
              name="password"
              autoComplete="new-password"
              onBlur={handleBlur}
              onFocus={handleFocus}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Verify />
            <Show onClick={showPassword} onKeyDown={showPassword} type="button">
              Show
            </Show>
          </Label>
        </Inputs>
        <Signup type="submit" disabled ref={submitButton}>
          Sign up
        </Signup>
        <Agree>
          <p>
            By signing up, you agree to our
            <span> Terms, Data, Policy </span>
            and
            <span> Cookies Policy</span>
          </p>
        </Agree>
      </Form>
    </Container>
  );
};

export default SigninForm;
