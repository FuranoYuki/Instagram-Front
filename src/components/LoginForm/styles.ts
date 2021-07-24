import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 10px 0;
  margin-top: 20px;
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

export const Inputs = styled.div``;

export const Label = styled.label`
  display: flex;
  margin: 0 40px 6px 40px;
  border-radius: 3px;
  border: 1px solid var(--navbar-border);

  > div {
    display: flex;
    align-items: center;

    padding: 5px;
    font-weight: 600;
    line-height: 18px;

    color: var(--black-text);
    background-color: var(--body-background);

    &:hover {
      cursor: pointer;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px 0 2px 8px;
  font-size: 12px;
  line-height: 18px;
  border: none;
`;

export const LogIn = styled.button`
  display: block;

  margin: 8px 40px;
  padding: 5px 9px;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;

  border: 1px solid transparent;
  border-radius: 3px;
  color: var(--white-color);
  background-color: var(--blue-color);

  cursor: pointer;

  &:disabled {
    background-color: var(--button-disabled);
  }
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

export const Facebook = styled.button`
  margin: 8px 40px;
  border: none;
  background-color: transparent;
  > a {
    color: var(--blue-facebook);
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
  }
`;

export const FacebookIcon = styled.div``;

export const WarningError = styled.div`
  display: none;

  margin: 10px 0;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: var(--warning-red);
`;

export const ForgotPass = styled.div`
  font-size: 12px;
  line-height: 14px;
  margin-top: 12px;
  margin-bottom: 25px;
  color: var(--blue-link);
  text-align: center;
`;
