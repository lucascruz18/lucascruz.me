import React from 'react'
import Link from 'next/link';

import {Container, Logo, NavItems, NavItemsText, Donate} from './styles'

export default function Articles() {
  return (
    <Container>
      <Link href="/">
        <Logo>L</Logo>
      </Link>

      <NavItems>
        <Link href="/about">
          <NavItemsText>About me</NavItemsText>
        </Link>
        <NavItemsText>Articles</NavItemsText>
        <NavItemsText>Projects</NavItemsText>
      </NavItems>
    </Container>
  );
}
