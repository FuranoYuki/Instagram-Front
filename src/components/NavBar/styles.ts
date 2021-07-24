import styled from "styled-components";

import { search } from "../../styles/Icons";

export const Container = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--navbar-border);

  position: fixed;
  align-items: center;
  z-index: 3;
  top: 0;

  background-color: var(--navbar-background);
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  max-width: 975px;
  height: 54px;
  padding: 0 20px;
  margin: auto;
`;

export const BrandBox = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;

  padding-top: 7px;

  > a {
    width: 100%;
    height: 100%;
  }
`;

export const Search = styled.div`
  display: none;
  justify-content: center;
  align-items: center;

  height: 28px;
  width: 210px;
  padding: 2px;

  color: var(--gray-tex);
  border-radius: 3px;
  border: 1px solid var(--border-color);
  background-color: var(--body-background);

  &:hover {
    cursor: text;
  }

  @media (min-width: 500px) {
    display: flex;
  }
`;

export const SearchIcon = styled(search)`
  height: 12px;
  width: 12px;
  margin-right: 3px;
  color: var(--black-text);
  margin: 0 5px;
`;

export const SearchInput = styled.input`
  width: 45px;

  border: none;
  outline: none;
  background-color: transparent;
`;

export const Logout = styled.div``;

export const Account = styled.div`
  display: flex;
  flex-grow: 1;
  gap: 15px;

  align-items: center;
  justify-content: flex-end;
`;

export const Login = styled.button`
  padding: 5px 9px;
  border-radius: 4px;
  border: 1px solid transparent;

  font-size: 14px;
  font-weight: 600;

  color: var(--white-color);
  background-color: var(--blue-color);
`;

export const Signup = styled.div`
  color: var(--blue-color);
  font-weight: 600;
`;
