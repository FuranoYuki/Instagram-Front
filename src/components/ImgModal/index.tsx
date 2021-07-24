import React, { forwardRef, RefObject } from "react";

import PostedImg from "../PostedImg";

import { Container, Left, Right, Button, CloseIcon, Content } from "./styles";

const ImgModal: React.ForwardRefRenderFunction<HTMLDivElement> = ({}, ref) => {
  const handlerCloseModal = () => {
    const obj = ref as RefObject<HTMLDivElement>;
    const current = obj.current as HTMLDivElement;
    const body = document.querySelector("body") as HTMLBodyElement;

    body.style.overflow = "auto";
    current.style.display = "none";
  };

  const handlerClickOutModal = (e: React.MouseEvent) => {
    if (e.currentTarget === e.target) {
      handlerCloseModal();
    }
  };

  return (
    <Container ref={ref} onClick={handlerClickOutModal}>
      <Content>
        <span></span>
        <PostedImg />
        <span></span>
      </Content>
      <Left />
      <Right />
      <Button type="button" onClick={handlerCloseModal}>
        <CloseIcon />
      </Button>
    </Container>
  );
};

export default forwardRef(ImgModal);
