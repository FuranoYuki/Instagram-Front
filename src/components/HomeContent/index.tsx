import React from "react";
import PostedImg from "../PostedImg";

import { Container } from "./styles";

const HomeContent: React.FC = () => {
  return (
    <Container>
      <PostedImg feed={true} />
    </Container>
  );
};

export default HomeContent;
