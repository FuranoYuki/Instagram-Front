import React from "react";
import Link from "next/link";
import Image from "next/image";

import {
  Container,
  Left,
  ImgBox,
  Right,
  Comment,
  Like,
  HeartIcon,
  Info,
} from "./styles";

const PostedSocialComment: React.FC = () => {
  const userPost = false;

  return (
    <Container>
      <Left>
        <ImgBox>
          <Image
            src="/perfil.jpg"
            height={800}
            width={640}
            alt="user perfil image"
            objectFit="cover"
            objectPosition="top"
          />
        </ImgBox>
      </Left>
      <Right>
        <Comment>
          <div>
            <Link href="/">
              <a>jessjessu</a>
            </Link>
            Some more photos from a few days ago 🌸🌼 - Happy pride month to
            everyone !! Love you all 💗
          </div>
          {userPost && <HeartIcon />}
        </Comment>
        <Info>
          <Like>1W</Like>
          {userPost && <span>25 likes</span>}
        </Info>
      </Right>
    </Container>
  );
};

export default PostedSocialComment;
