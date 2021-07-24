import React from "react";
import NavBar from "../../components/NavBar";
import Perfil from "../../components/Perfil";
import PerfilGallery from "../../components/PerfilGallery";
import Footer from "../../components/Footer";

import { Container } from "./styles";

const PerfilPage: React.FC = () => {
  return (
    <Container>
      <main>
        <Perfil />
        <PerfilGallery />
      </main>
      <NavBar />
      <Footer />
    </Container>
  );
};

export default PerfilPage;
