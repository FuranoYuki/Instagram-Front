import styled from "styled-components";
import { FacebookSquare } from "../../styles/Icons";

export const Container = styled.div`
  width: 100%;
  margin-top: 20px;
  padding: 10px 0;
  border: 1px solid var(--navbar-border);

  background-color: var(--white-color);

  @media (max-width: 450px) {
    background-color: transparent;
    border: none;
  }
`;

export const Brand = styled.img`
  display: flex;

  width: 175px;
  height: 51px;
  margin: 22px auto 12px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;

  margin-top: 24px;
`;

export const Header = styled.div`
  margin: 0 40px 10px;

  text-align: center;
  font-weight: 600;
  font-size: 17px;
  line-height: 20px;

  color: var(--gray-text);
`;

export const Facebook = styled.div`
  margin: 8px 40px;

  > a {
    display: block;
  }
`;

export const FacebookIcon = styled(FacebookSquare)`
  height: 20px;
  width: 20px;
  fill: var(--white-color);
`;

export const LoginFace = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 100%;
  padding: 5px 9px;
  border-radius: 4px;
  border: 1px solid transparent;

  text-align: center;
  font-size: 14px;
  line-height: 18px;
  font-weight: 600;

  color: var(--white-color);
  background-color: #0095f6;

  cursor: pointer;
`;

export const Or = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 10px 40px 18px;

  > div {
    display: flex;
    flex-grow: 1;
    height: 1px;
    background-color: var(--navbar-border);
  }

  > span {
    display: flex;
    flex-shrink: 0;
    margin: 0 10px;

    font-weight: 600;
    font-size: 13px;
    line-height: 15px;
    color: var(--gray-text);
  }
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  position: relative;

  height: 36px;
  margin: 0 40px 6px;

  border-radius: 3px;
  border: 1px solid var(--border-color);

  background-color: var(--body-background);

  > span {
    position: absolute;
    left: 8px;
    z-index: 2;

    height: 36px;
    width: 100%;

    font-size: 12px;
    line-height: 36px;
    white-space: nowrap;
    text-overflow: ellipsis;
    transform-origin: left;

    color: var(--gray-text);
  }
`;

export const Input = styled.input`
  display: flex;
  flex-grow: 1;

  padding: 14px 0 2px 8px;
  border: none;
  background-color: transparent;

  &:focus {
    outline: none;
  }
`;

export const Verify = styled.div`
  display: flex;
  flex-shrink: 0;

  padding: 5px;

  background-color: var(--body-background);
`;

export const Show = styled.button`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  position: relative;
  z-index: 3;

  padding: 8px 8px;
  font-weight: 600;
  line-height: 18px;

  color: var(--black-text);
  border: none;
  background-color: var(--body-background);

  &:hover {
    cursor: pointer;
  }
`;

export const Signup = styled.button`
  margin: 8px 40px;
  padding: 5px 9px;
  border-radius: 4px;
  border: 1px solid transparent;

  text-align: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;

  color: var(--white-color);
  background-color: rgb(0, 149, 246);

  &:disabled {
    background-color: rgba(0, 149, 246, 0.3);
  }
`;

export const Agree = styled.div`
  margin: 10px 40px;

  text-align: center;
  font-size: 12px;
  line-height: 16px;

  color: var(--gray-text);

  > p > span {
    font-weight: 600;
    cursor: pointer;
  }
`;
