import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #000;
`

export const Content = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
`;

export const ImageWrapper = styled.div`
  width: 150px;
  height: 150px;

  img {
    z-index: 3;
    height: 100%;
    width: 100%;
    border-radius: 500%;
  }
`;

export const Title = styled.h1`
  color: #fafafa;
  text-decoration: none;
  font-size: 26px;
  margin: 0;
  line-height: 1.15;
  text-align: center;
  margin-top: 35px;

  a {
    color: #0070f3;
    text-decoration: underline;
  }
`

export const SubTitle = styled.h2`
  color: #fafafa;
  font-size: 18px;
  text-align: center;

  margin-top: 5px;
`;

export const Description = styled.p`
  color: #fafafa;
  font-size: 16px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;

  margin-top: 15px;
`;

export const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 100px;
`;

export const SocialButton = styled.a`
  margin: 5px;
`;