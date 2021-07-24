import React from "react";
import NavBar from "../../components/NavBar";
import HomeContent from "../../components/HomeContent";
import HomeSuggestion from "../../components/HomeSuggestion";
import Footer from "../../components/Footer";

import { Container } from "./styles";

const HomeView: React.FC = () => {
  return (
    <Container>
      <main>
        <section>
          <HomeContent />
          <HomeSuggestion />
        </section>
      </main>
      <NavBar />
      <Footer />
    </Container>
  );
};

export default HomeView;
