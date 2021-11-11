import React from 'react'

// import { FaLinkedin, FaGithub } from 'react-icons/fa';

import {Container, SocialText, SocialButton} from './styles'

export default function Footer() {
  return (
    <Container>
      <SocialButton href="https://www.linkedin.com/in/lucas-cruz-b62505160" rel="noopener noreferrer external nofollow" target="_blank">
        <SocialText>LINKEDIN</SocialText>
      </SocialButton>
      <SocialButton href="https://github.com/lucascruz18" rel="noopener noreferrer external nofollow" target="_blank">
        <SocialText>GITHUB</SocialText>
      </SocialButton>
      <SocialButton href="https://www.instagram.com/lucascruz.here" rel="noopener noreferrer external nofollow" target="_blank">
        <SocialText>INSTAGRAM</SocialText>
      </SocialButton>
    </Container>
  );
}
