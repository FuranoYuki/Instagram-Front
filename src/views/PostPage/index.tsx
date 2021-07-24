import React from "react";
import NavBar from "../../components/NavBar";
import PostedImg from "../../components/PostedImg";
import Footer from "../../components/Footer";

import { Container } from "./styles";

const PostPage: React.FC = () => {
  return (
    <Container>
      <NavBar />
      <main>
        <PostedImg />
      </main>
      <Footer />
    </Container>
  );
};

export default PostPage;
