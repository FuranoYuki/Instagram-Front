import React from "react";

import {
  Container,
  Stories,
  Storie,
  StorieBorder,
  StorieImg,
  SocialData,
  SocialDataItem,
} from "./styles";

const NumbersStories: React.FC = () => {
  return (
    <Container>
      <Stories>
        <Storie>
          <StorieBorder>
            <StorieImg />
          </StorieBorder>
          <span>storie</span>
        </Storie>
        <Storie>
          <StorieBorder>
            <StorieImg />
          </StorieBorder>
          <span>storie</span>
        </Storie>
        <Storie>
          <StorieBorder>
            <StorieImg />
          </StorieBorder>
          <span>storie</span>
        </Storie>
      </Stories>
      <SocialData>
        <SocialDataItem>
          <span>34</span>
          <span>posts</span>
        </SocialDataItem>
        <SocialDataItem>
          <span>477k</span>
          <span>followers</span>
        </SocialDataItem>
        <SocialDataItem>
          <span>290</span>
          <span>following</span>
        </SocialDataItem>
      </SocialData>
    </Container>
  );
};

export default NumbersStories;
