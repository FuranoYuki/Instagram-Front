import React from "react";
import Image from "next/image";

import {
  Container,
  Header,
  Left,
  Right,
  HeartIcon,
  CommentIcon,
  ShareIcon,
  BookIcon,
  Likes,
  User,
  PostedAt,
} from "./styles";

const PostedSocialInfo: React.FC = () => {
  return (
    <Container>
      <Header>
        <Left>
          <HeartIcon />
          <CommentIcon />
          <ShareIcon />
        </Left>
        <Right>
          <BookIcon />
        </Right>
      </Header>
      <Likes>
        <User>
          <Image
            width={640}
            height={800}
            alt="jessie"
            src="/perfil.jpg"
            objectFit="cover"
            objectPosition="top"
          />
        </User>
        <p>
          Liked by <span>annas_bowls</span> and <span>137,689 others</span>
        </p>
      </Likes>
      <PostedAt>7 DAYS AGO</PostedAt>
    </Container>
  );
};

export default PostedSocialInfo;
