import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
`;

export const Logo = styled.p`
  font-weight: bold;
  color: #f2f2f2;
  font-size: 24px;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 30px;
  margin-left: 30px;
  cursor: pointer;
`;

export const NavItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-right: 30px;
`;

export const NavItemsText = styled.a`
  color: #f2f2f2;
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  cursor: pointer;
  transition: 0.5s;
  margin: 20px;

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