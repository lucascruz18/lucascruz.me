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
  align-items: start;
  justify-content: start;
  flex-direction: column;
  margin-right: 45%;
  margin-bottom: 25%;
`;

export const Title = styled.h1`
  font-size: 50px;
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
`

export const SubTitle = styled.p`
  color: #828282;
  font-size: 18px;
  text-align: left;

  margin-top: 12px;
`;

export const Description = styled.p`
  color: #8f9ba8;
  font-size: 16px;
  text-align: left;
  font-family: Arial, Helvetica, sans-serif;

  margin-top: 15px;
`;

export const ConectButton = styled.button`
  width: 150px;
  height: 50px;
  background: transparent;
  border: 1px solid #828282;
  margin-top: 50px;
`;

export const ConectButtonText = styled.p`
  font-size: 14px;
  color: #f2f2f2;
  cursor: pointer;
`;