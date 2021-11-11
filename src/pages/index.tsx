import React, {useEffect} from 'react'
import Head from 'next/head';

import Header from '../components/Header'
import Footer from '../components/Footer'

import {Container, Main, Title, SubTitle, Description} from '../styles/pages/Home'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Lucas Cruz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Main>
        <Title>Lucas Cruz</Title>
        <SubTitle>Software Engineer at EBANX</SubTitle>
        <Description>
          Se você me perguntar por que eu gosto tanto de tecnologia minha resposta será simples: resolver problemas!
          Sou completamente apaixonado pela arte de solucionar problemas e acredito que a tecnologia seja uma ferramenta incrível para isso.
          Como disse eu vejo a tecnologia como uma ferramenta para solucionar problemas, por esse motivo não me prendo a uma tecnologia específica, e foco mais em suas arquiteturas e é nisso que venho colocando minhas forças.
          Precisamos escolher algo para focar, e eu escolhi o <a>javascript</a>, atuo há 2 anos com Node, React e React-Native.
        </Description>
      </Main>

      <Footer />
    </Container>
  );
}
