import styled, { css } from "styled-components";
import { EmojiHappy } from "../../styles/Icons";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
  bottom: 0;

  width: 100%;
`;

const Icon = css`
  height: 26px;
  width: 26px;
  cursor: pointer;
  color: var(--black-text);
`;

export const Comment = styled.form`
  display: flex;
  align-items: center;

  padding: 5px 16px;
  margin-top: 8px;
  border-top: 1px solid var(--navbar-border);
`;

export const FaceIcon = styled(EmojiHappy)`
  ${Icon}
  height: 28px;
  width: 28px;
  margin: 8px 16px 8px 0;
`;

export const TextArea = styled.textarea`
  display: flex;
  flex-grow: 1;

  height: 18px;
  max-height: 80px;

  font-size: 14px;
  line-height: 18px;
  outline: 0;
  resize: none;
  background-attachment: scroll;
  border: none;
`;

export const Button = styled.button`
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;

  border: none;
  background-color: transparent;

  cursor: pointer;
  color: rgb(0, 149, 246);
`;
