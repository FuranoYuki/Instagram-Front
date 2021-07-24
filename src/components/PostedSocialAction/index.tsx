import React, { useRef } from "react";
import PostedSocialInfo from "../PostedSocialInfo";

import { Container, Comment, FaceIcon, TextArea, Button } from "./styles";

const PostedSocialAction: React.FC = () => {
  const comment = useRef<HTMLTextAreaElement>(null);
  const button = useRef<HTMLButtonElement>(null);

  const handlerCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const userComment = comment.current as HTMLTextAreaElement;
    userComment.value = "";
  };

  const handlerCommentFilled = () => {
    const userComment = comment.current as HTMLTextAreaElement;
    const formButton = button.current as HTMLButtonElement;

    formButton.disabled = userComment.value.length > 0 ? false : true;
  };

  return (
    <Container>
      <PostedSocialInfo />
      <Comment onSubmit={handlerCommentSubmit}>
        <FaceIcon />
        <TextArea
          placeholder="Add a comment"
          autoComplete="off"
          autoCorrect="off"
          ref={comment}
          onChange={handlerCommentFilled}
        />
        <Button type="submit" disabled ref={button}>
          Post
        </Button>
      </Comment>
    </Container>
  );
};

export default PostedSocialAction;
