import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  z-index: 10;
  margin: 40px 120px 0 120px;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease-in-out;
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

export const NavLinks = styled(NavLink)`
  text-decoration: none;
  font: var(--M22-22);
  color: #000;
  margin-top: 10px;

  &.active {
    color: #619092;
  }
`;
