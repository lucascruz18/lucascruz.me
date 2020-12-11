import React, {useEffect} from 'react'
import Head from 'next/head';

import { FaLinkedin, FaGithub } from 'react-icons/fa';

import {Container, Content, ImageWrapper, Title, SubTitle, Description, Social, SocialButton} from '../styles/pages/Home'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>lucascruz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Content>
        <ImageWrapper>
          <img src="/images/profile.jpg" />
        </ImageWrapper>

        <Title>I'am <a href="https://github.com/lucascruz18">Lucas Cruz!</a></Title>
        <SubTitle>Software engineer</SubTitle>
        <Description>
          Se você me perguntar por que eu gosto tanto de tecnologia minha resposta será simples: resolver problemas!
          Sou completamente apaixonado pela arte de solucionar problemas e acredito que a tecnologia seja uma ferramenta incrível para isso.
          Como disse eu vejo a tecnologia como uma ferramenta para solucionar problemas, por esse motivo não me prendo a uma tecnologia específica, e foco mais em suas arquiteturas e é nisso que venho colocando minhas forças.
          Precisamos escolher algo para focar, e eu escolhi o <a>javascript</a>, atuo há 2 anos com Node, React e React-Native.
        </Description>

        <Social>
          <SocialButton href="https://www.linkedin.com/in/lucas-cruz-b62505160/" rel="noopener noreferrer external nofollow" target="_blank">
            <FaLinkedin color="#fafafa" size={35} />
          </SocialButton>
          <SocialButton href="https://github.com/lucascruz18" rel="noopener noreferrer external nofollow" target="_blank">
            <FaGithub color="#fafafa" size={35} />
          </SocialButton>
        </Social>
      </Content>
    </Container>
  );
}
