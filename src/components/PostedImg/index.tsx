import React, { useEffect, useState } from "react";
import Image from "next/image";

import PostSocial from "../PostedSocial";
import PostedSocialHeader from "../PostedSocialHeader";
import PostedSocialInfo from "../PostedSocialInfo";

import {
  Container,
  Wrapper,
  ImgSection,
  Left,
  LeftIcon,
  Right,
  RightIcon,
  ImgBox,
} from "./styles";

interface Props {
  feed?: boolean;
}

const PostedImg: React.FC<Props> = ({ feed }) => {
  const [body, setBody] = useState(false);
  const carousel = [
    { id: 1, src: "/jessie/img1/img1.jpg" },
    { id: 2, src: "/jessie/img1/img2.jpg" },
  ];

  useEffect(() => {
    if (feed) {
      setBody(false);
    } else {
      const obj = window as Window;
      if (window.innerWidth > 735) {
        setBody(true);
      } else {
        setBody(false);
      }

      obj.addEventListener("resize", () => {
        if (window.innerWidth > 735) {
          setBody(true);
        } else {
          setBody(false);
        }
      });
    }
  }, [feed]);

  return (
    <Container>
      <Wrapper feed={feed}>
        {!body && <PostedSocialHeader />}
        <ImgSection feed={feed}>
          <Left>
            <LeftIcon />
          </Left>
          <Right>
            <RightIcon />
          </Right>

          <ImgBox>
            {carousel.map((img) => (
              <Image
                key={img.id}
                src={img.src}
                alt="jessie"
                height={800}
                width={640}
                objectPosition="center"
              />
            ))}
          </ImgBox>
        </ImgSection>
        {!body && <PostedSocialInfo />}
        {body && <PostSocial />}
      </Wrapper>
    </Container>
  );
};

export default PostedImg;
