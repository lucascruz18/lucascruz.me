import React, {useEffect} from 'react'
import Head from 'next/head';

import Header from '../components/Header'
import Footer from '../components/Footer'

import {
  Container,
  Main,
  Title,
  SubTitle,
  ConectButton,
  ConectButtonText
} from '../styles/pages/Home'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Lucas Cruz | Software Engineer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Main>
        <Title>Olá, sou o Lucas Cruz</Title>
        <SubTitle>Software Engineer at EBANX</SubTitle>

        <ConectButton>
          <ConectButtonText>Conecte-se</ConectButtonText>
        </ConectButton>
      </Main>

      <Footer />
    </Container>
  );
}
