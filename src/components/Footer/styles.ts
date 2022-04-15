import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  height: 60px;
  background: #202020;
`;

export const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SocialText = styled.p`
  color: #8f9ba8;
  font-size: 12px;
  text-align: left;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
  transition: 0.5s;

  &:hover  {
    color: #333;
  }
`;

export const SocialButton = styled.a`
  margin: 50px;
  text-decoration: none;
`;