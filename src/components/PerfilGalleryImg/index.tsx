import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import {
  Container,
  Wrapper,
  ImgBox,
  MultipleImg,
  MultipleImgIcon,
  SocialWrapper,
  Social,
  Item,
  HeartIcon,
  CommentIcon,
} from "./styles";

interface Props {
  imgSrc: string;
  carousel: boolean;
  id: string;
}

const PerfilGalleryImg: React.FC<Props> = ({ imgSrc, carousel, id }) => {
  const redirect = useRef(false);
  const router = useRouter();

  const handlerClick = () => {
    if (redirect.current) {
      window.history.replaceState(null, "", `/p/${id}`);
    } else {
      router.push("/p/post");
    }
  };

  useEffect(() => {
    redirect.current = window.innerWidth > 736 ? true : false;

    window.addEventListener("resize", () => {
      redirect.current = window.innerWidth > 736 ? true : false;
    });
  }, []);

  return (
    <Container onClick={handlerClick}>
      <Wrapper>
        <ImgBox>
          <Image
            src={imgSrc}
            height="800"
            width="640"
            objectFit="cover"
            objectPosition="center"
          />
        </ImgBox>

        {carousel && (
          <MultipleImg>
            <MultipleImgIcon />
          </MultipleImg>
        )}

        <SocialWrapper>
          <Social>
            <Item>
              <HeartIcon />
              <span>188k</span>
            </Item>
            <Item>
              <CommentIcon />
              <span>2,390</span>
            </Item>
          </Social>
        </SocialWrapper>
      </Wrapper>
    </Container>
  );
};

export default PerfilGalleryImg;
