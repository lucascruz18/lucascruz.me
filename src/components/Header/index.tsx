import React from 'react'

import {Container, Logo, NavItems, NavItemsText, Donate} from './styles'

export default function Articles() {
  return (
    <Container>
      <Logo>LQT</Logo>

      <NavItems>
        <NavItemsText>ABOUT</NavItemsText>
        <NavItemsText>ARTICLES</NavItemsText>
        <NavItemsText>PROJECTS</NavItemsText>
      </NavItems>

      <Donate>D</Donate>
    </Container>
  );
}
