import React from "react";
import Image from "next/image";
import Link from "next/link";

import {
  Header,
  PerfilImg,
  Perfil,
  PerfilLink,
  Option,
  OptionIcon,
} from "./styles";

const W: React.FC = () => {
  return (
    <Header>
      <PerfilImg>
        <Image
          src="/perfil.jpg"
          alt="jessie"
          height={800}
          width={640}
          objectFit="cover"
          objectPosition="top"
        />
      </PerfilImg>
      <Perfil>
        <PerfilLink>
          <Link href="/">
            <a>jessjessu</a>
          </Link>
        </PerfilLink>
        <Option>
          <OptionIcon />
        </Option>
      </Perfil>
    </Header>
  );
};

export default W;
