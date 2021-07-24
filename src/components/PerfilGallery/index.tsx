import React, { useEffect, useRef } from "react";
import PerfilGalleryImg from "../PerfilGalleryImg";
import PerfilGalleryNavbar from "../PerfilGalleryNavbar";
import ImgModal from "../ImgModal";

import { Container, Gallery, Column, GalleryImgBox } from "./styles";

import data from "../../data.json";

const PerfilGallery: React.FC = () => {
  const model = useRef<HTMLDivElement>(null);
  const imgs = data.imgs;
  const size = useRef(false);

  const handlerOpenModal = () => {
    const modal = model.current as HTMLDivElement;
    const body = document.querySelector("body") as HTMLBodyElement;

    if (size) {
      modal.style.display = "flex";
      body.style.overflow = "hidden";
    }
  };

  useEffect(() => {
    size.current = window.innerWidth > 736 ? true : false;

    window.addEventListener("resize", () => {
      size.current = window.innerWidth > 736 ? true : false;
    });
  }, []);

  return (
    <Container>
      <PerfilGalleryNavbar />
      <Gallery>
        {imgs.map((row, index) => (
          // eslint-disable-next-line react/jsx-key
          <Column key={index}>
            {row.map((img) => (
              <GalleryImgBox key={img.id} onClick={handlerOpenModal}>
                <PerfilGalleryImg
                  id={img.id}
                  key={img.id}
                  imgSrc={img.src}
                  carousel={img.carousel}
                />
              </GalleryImgBox>
            ))}
          </Column>
        ))}
      </Gallery>
      <ImgModal ref={model} />
    </Container>
  );
};

export default PerfilGallery;
