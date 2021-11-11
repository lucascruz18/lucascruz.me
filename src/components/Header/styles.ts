import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  background-color: #fff;
  background-color: rgba(255,255,255,0.1);
`;

export const Logo = styled.p`
  font-weight: bold;
  margin-left: 20px;
  color: #fafafa;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const NavItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 30%;
`;

export const NavItemsText = styled.a`
  color: #8f9ba8;
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  cursor: pointer;
  transition: 0.5s;

  &:hover  {
    color: #333;
  }
`;

export const Donate = styled.p`
  font-weight: bold;
  margin-right: 20px;
  color: #fafafa;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
`;