import React from "react";
import PostedSocialAction from "../PostedSocialAction";
import PostedSocialComment from "../PostedSocialComment";
import PostedSocialHeader from "../PostedSocialHeader";

import { Container, Comments } from "./styles";

const PostedSocial: React.FC = () => {
  return (
    <Container>
      <PostedSocialHeader />
      <Comments>
        <PostedSocialComment />
      </Comments>
      <PostedSocialAction />
    </Container>
  );
};

export default PostedSocial;
