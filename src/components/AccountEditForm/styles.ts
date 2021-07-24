import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  padding: 20px;

  @media (max-width: 735px) {
    padding: 20px 0;
  }
`;

export const EditForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px 0;

  padding: 20px 0;
  max-width: 695px;
  width: 100%;

  border: 1px solid var(--navbar-border);
  background-color: var(--navbar-background);

  @media (max-width: 735px) {
    padding: 20px 15px;
  }
`;

export const ImageDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0 30px;

  margin-top: 20px;

  @media (max-width: 735px) {
    gap: 0 10px;
  }
`;

export const Label = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  width: 200px;

  @media (max-width: 735px) {
    width: 80px;
  }
`;

export const ImgBox = styled.div`
  height: 40px;
  width: 40px;

  border-radius: 50%;
  border-bottom: 1px solid var(--navbar-border);

  @media (max-width: 735px) {
    margin: auto;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px 0;

  > *:first-child {
    font-size: 20px;
    line-height: 22px;
  }

  > *:last-child {
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;

    color: var(--blue-color);

    &:hover {
      cursor: pointer;
    }
  }
`;

export const InputFile = styled.input`
  display: none;
`;

export const Fields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px 0;

  margin-top: 20px;
`;

export const Field = styled.div`
  display: flex;
  gap: 10px 30px;

  @media (max-width: 735px) {
    flex-direction: column;
  }
`;

export const FieldLabel = styled.label`
  display: flex;
  justify-content: flex-end;
  flex-shrink: 0;

  width: 200px;
  font-weight: 600;

  @media (max-width: 735px) {
    justify-content: flex-start;
  }
`;

export const InputInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px 0;

  max-width: 355px;
`;

export const Input = styled.input`
  width: 100%;
  height: 32px;
  padding: 0 10px;
  border-radius: 3px;

  font-size: 16px;
  font-weight: 300;
  line-height: 18px;

  border: 1px solid var(--navbar-border);
`;

export const Bio = styled.textarea`
  width: 100%;
  max-width: 100%;
  height: 55px;
  padding: 0 10px;
  border-radius: 3px;

  font-size: 16px;
  font-weight: 300;
  line-height: 18px;

  border: 1px solid var(--navbar-border);
`;

export const Select = styled.select`
  width: 100%;
  height: 32px;
  padding: 0 10px;
  border-radius: 3px;

  font-size: 16px;
  font-weight: 300;
  line-height: 18px;

  border: 1px solid var(--navbar-border);
`;

export const Explain = styled.div`
  font-size: 12px;
  line-height: 14px;

  color: var(--gray-text);

  > span {
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
  }
`;

export const Button = styled.button`
  margin: 20px auto;
  padding: 5px 9px;
  font-size: 14px;
  line-height: 18px;
  font-weight: 600;
  border-radius: 4px;
  border: none;

  cursor: pointer;
  color: var(--white-color);
  background-color: var(--blue-color);
`;
