import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: #171717;
  width: 100%;
`

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  width: 100%;
  margin-bottom: 30%;
`;

export const Title = styled.h1`
  font-size: 40px;
  background-image: linear-gradient(135deg, rgb(255, 255, 128) 0px, rgb(255, 128, 191) 100%);
  background-size: 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  -webkit-box-decoration-break: clone;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 50px;
`

export const Description = styled.p`
  color: #828282;
  font-size: 16px;
  text-align: left;
  font-family: Arial, Helvetica, sans-serif;

  margin-top: 15px;
  width: 70%;
`;