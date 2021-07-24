import React from "react";
import NumbersStories from "../NumbersStories";

import {
  Container,
  Wrapper,
  Top,
  Header,
  ImgBox,
  ImgPerfil,
  PerfilInfo,
  InfoHeader,
  Name,
  Actions,
  Message,
  FollowCheck,
  FollowIcon,
  Arrow,
  ArrowIcon,
  Settings,
  SettIcon,
  InfoDatas,
  DataTopic,
  Bio,
  BioMobile,
  Nickname,
  Resume,
} from "./styles";

const Perfil: React.FC = () => {
  const following = true;

  return (
    <Container>
      <Wrapper>
        <Top>
          <Header>
            <ImgBox>
              <ImgPerfil src="/perfil.jpg" />
            </ImgBox>
          </Header>
          <PerfilInfo>
            <InfoHeader>
              <Name>jessjessu</Name>
              <Actions>
                <Message>Follow</Message>

                {following ?? (
                  <FollowCheck>
                    <FollowIcon />
                  </FollowCheck>
                )}

                <Arrow>
                  <ArrowIcon />
                </Arrow>
              </Actions>
              <Settings>
                <SettIcon />
              </Settings>
            </InfoHeader>
            <InfoDatas>
              <DataTopic>
                <span>34 </span>posts
              </DataTopic>
              <DataTopic>
                <span>476k </span>followers
              </DataTopic>
              <DataTopic>
                <span>290 </span>following
              </DataTopic>
            </InfoDatas>
            <Bio>
              <Nickname>Jess💗🐰</Nickname>
              <Resume>
                Gamer <br />♡ Tiktoker and twitch streamer! ♡ <br />
                ୨୧ 15 so don’t be weird ୨୧ <br />
                💗Tics and Tourette’s awareness 💗 <br />
                Jessjessuu@gmail.com for business inquiries
              </Resume>
              <a href="google.com">linktr.ee/jessjessjessu</a>
            </Bio>
          </PerfilInfo>
        </Top>
        <BioMobile>
          <Nickname>Jess💗🐰</Nickname>
          <Resume>
            Gamer <br />♡ Tiktoker and twitch streamer! ♡ <br />
            ୨୧ 15 so don’t be weird ୨୧ <br />
            💗Tics and Tourette’s awareness 💗 <br />
            Jessjessuu@gmail.com for business inquiries
          </Resume>
          <a href="google.com">linktr.ee/jessjessjessu</a>
        </BioMobile>
        <NumbersStories />
      </Wrapper>
    </Container>
  );
};

export default Perfil;
