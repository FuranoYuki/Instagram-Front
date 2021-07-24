import React, { useRef, useEffect } from "react";
import Image from "next/image";

import {
  Container,
  Imgs,
  ImgBox1,
  ImgBox2,
  ImgBox3,
  ImgBox4,
  ImgBox5,
} from "./styles";

const LoginImg: React.FC = () => {
  const point = useRef<HTMLCollection>(null);
  const count = useRef(1);

  useEffect(() => {
    const imgs = document.getElementsByClassName("imgBox");
    point.current = imgs;

    setInterval(imgsAnimation, 5000);
  }, []);

  const imgsAnimation = () => {
    if (count.current <= 4) {
      console.log(count.current);
      const currentImg = point.current[count.current] as HTMLDivElement;
      currentImg.style.opacity = "1";
      currentImg.style.zIndex = "2";

      if (count.current !== 0) {
        const oldImg = point.current[count.current - 1] as HTMLDivElement;
        oldImg.style.opacity = "0";
        oldImg.style.zIndex = "0";
      } else {
        const oldImg = point.current[4] as HTMLDivElement;
        oldImg.style.opacity = "0";
        oldImg.style.zIndex = "0";
      }
    }

    count.current = count.current == 4 ? 0 : count.current + 1;
  };

  return (
    <Container>
      <Imgs>
        <ImgBox1 className="imgBox">
          <Image
            src="/Login/img-1.jpg"
            alt="sample img 1"
            height={427}
            width={240}
            objectFit="cover"
            objectPosition="center"
          />
        </ImgBox1>
        <ImgBox2 className="imgBox">
          <Image
            src="/Login/img-2.jpg"
            alt="sample img 2"
            height={427}
            width={240}
            objectFit="cover"
            objectPosition="center"
          />
        </ImgBox2>
        <ImgBox3 className="imgBox">
          <Image
            src="/Login/img-3.jpg"
            alt="sample img 3"
            height={427}
            width={240}
            objectFit="cover"
            objectPosition="center"
          />
        </ImgBox3>
        <ImgBox4 className="imgBox">
          <Image
            src="/Login/img-4.jpg"
            alt="sample img 4"
            height={427}
            width={240}
            objectFit="cover"
            objectPosition="center"
          />
        </ImgBox4>
        <ImgBox5 className="imgBox">
          <Image
            src="/Login/img-5.jpg"
            alt="sample img 5"
            height={427}
            width={240}
            objectFit="cover"
            objectPosition="center"
          />
        </ImgBox5>
      </Imgs>
    </Container>
  );
};

export default LoginImg;
