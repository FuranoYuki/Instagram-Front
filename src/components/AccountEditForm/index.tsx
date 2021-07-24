import React, { useRef } from "react";
import Image from "next/image";

import {
  Container,
  EditForm,
  ImageDiv,
  Label,
  Info,
  ImgBox,
  InputFile,
  Fields,
  Button,
  Field,
  FieldLabel,
  InputInfo,
  Input,
  Select,
  Bio,
  Explain,
} from "./styles";

const AccountEditForm: React.FC = () => {
  const imgInput = useRef<HTMLInputElement>(null);
  const nameInput = useRef<HTMLInputElement>(null);
  const emailInput = useRef<HTMLInputElement>(null);
  const bioInput = useRef<HTMLTextAreaElement>(null);
  const genderInput = useRef<HTMLSelectElement>(null);
  const websiteInput = useRef<HTMLInputElement>(null);
  const usernameInput = useRef<HTMLInputElement>(null);
  const phoneNumberInput = useRef<HTMLInputElement>(null);

  const handlerFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(e.currentTarget);
  };

  const handlerProfileClick = () => {
    imgInput.current.click();
  };

  return (
    <Container>
      <EditForm onSubmit={handlerFormSubmit} encType="multipart/form-data">
        <ImageDiv>
          <Label>
            <ImgBox>
              <Image
                height={"100%"}
                width={"100%"}
                alt="user perfil image"
                src="/defaultImage.jpg"
                objectFit="cover"
                objectPosition="top"
              />
            </ImgBox>
          </Label>
          <Info>
            <div>furanoyu</div>
            <div
              onClick={handlerProfileClick}
              onKeyDown={handlerProfileClick}
              role="button"
              tabIndex={0}
            >
              Change Profile Photo
            </div>
          </Info>
        </ImageDiv>
        <InputFile name="imgPerfil" id="imgPerfil" type="file" ref={imgInput} />
        <Fields>
          <Field>
            <FieldLabel htmlFor="name">Name</FieldLabel>
            <InputInfo>
              <Input
                id="name"
                name="name"
                type="text"
                ref={nameInput}
                placeholder="name"
              />
              <Explain>
                Help people discover your account by using the name you&apos;re
                known by: either your full name, nickname, or business name.
                <br />
                You can only change your name twice within 14 days.
              </Explain>
            </InputInfo>
          </Field>
          <Field>
            <FieldLabel htmlFor="username">Username</FieldLabel>
            <InputInfo>
              <Input
                id="username"
                name="username"
                type="text"
                ref={usernameInput}
                placeholder="username"
              />
              <Explain>
                In most cases, you&apos;ll be able to change your username back
                to furanoyu for another 14 days
              </Explain>
            </InputInfo>
          </Field>
          <Field>
            <FieldLabel htmlFor="website">Website</FieldLabel>
            <InputInfo>
              <Input
                id="website"
                name="website"
                type="text"
                ref={websiteInput}
                placeholder="website"
              />
            </InputInfo>
          </Field>
          <Field>
            <FieldLabel htmlFor="bio">Bio</FieldLabel>
            <InputInfo>
              <Bio id="bio" name="bio" ref={bioInput} />
              <Explain>
                <span>Personal Information</span>
                <br />
                Provide your personal information, even if the account is used
                for a business, a pet or something else. This won&apos;t be a
                part of your public profile.
              </Explain>
            </InputInfo>
          </Field>
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <InputInfo>
              <Input
                id="email"
                name="email"
                type="text"
                ref={emailInput}
                placeholder="email"
              />
            </InputInfo>
          </Field>
          <Field>
            <FieldLabel htmlFor="phoneNumber">Phone Number</FieldLabel>
            <InputInfo>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                ref={phoneNumberInput}
                placeholder="Phone Number"
              />
            </InputInfo>
          </Field>
          <Field>
            <FieldLabel htmlFor="gender">Gender</FieldLabel>
            <InputInfo>
              <Select
                id="gender"
                name="gender"
                ref={genderInput}
                placeholder="gender"
              >
                <option value="Masculine">Masculine</option>
                <option value="Femineni">Femineni</option>
              </Select>
            </InputInfo>
          </Field>
        </Fields>
        <Button type="submit" disabled={false}>
          Submit
        </Button>
      </EditForm>
    </Container>
  );
};

export default AccountEditForm;
