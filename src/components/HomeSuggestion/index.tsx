import React from "react";

import {
  Container,
  UserAccount,
  Left,
  UserImg,
  UserInfo,
  Suggestion,
  Header,
  FollowList,
  FollowSuggestion,
  FollowLeft,
  FollowImg,
  FollowInfo,
} from "./styles";

const HomeSuggestion: React.FC = () => {
  return (
    <Container>
      <UserAccount>
        <Left>
          <UserImg />
          <UserInfo>
            <span>furanoyu</span>
            <span>Furano Yukihira</span>
          </UserInfo>
        </Left>
        <span>Switch</span>
      </UserAccount>
      <Suggestion>
        <Header>
          <span>Suggestions For You</span>
          <span>See All</span>
        </Header>
        <FollowList>
          <FollowSuggestion>
            <FollowLeft>
              <FollowImg />
              <FollowInfo>
                <span>instagram</span>
                <span>Instagram Official Account</span>
              </FollowInfo>
            </FollowLeft>
            <span>Follow</span>
          </FollowSuggestion>
        </FollowList>
      </Suggestion>
    </Container>
  );
};

export default HomeSuggestion;
