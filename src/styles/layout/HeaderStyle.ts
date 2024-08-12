import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { isMobile, isTablet } from '@/hooks/Media';

export const Container = styled.div`
  display: flex;
  z-index: 10;
  margin: 50px 95px 0;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease-in-out;

  ${isMobile} {
    margin: 20px 16px 0;
  }

  ${isTablet} {
    margin: 30px 36px 0;
  }
`;

export const Nav = styled.div`
  display: flex;
  gap: 93px;
  transition: all 0.3s ease-in-out;

  @media (max-width: 1400px) {
    gap: 60px;
  }
`;

export const NavLinks = styled(NavLink)`
  text-decoration: none;
  font: var(--E30);
  color: #506c6d;
  transition: all 0.3s ease-in-out;

  &.active {
    color: #619092;
  }
`;

export const HamNav = styled.div`
  height: 100%;
  position: fixed;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  transition: all 0.3s ease-in-out;

  ${isMobile} {
    width: 200px;
    gap: 50px;
    padding-left: 40px;
  }

  ${isTablet} {
    width: 300px;
    gap: 70px;
    padding-left: 68px;
  }

  > svg {
    position: absolute;
    top: 46px;
    left: 20px;

    ${isTablet} {
      top: 78px;
      left: 28px;
    }
  }
`;

export const HamNavLinks = styled(NavLink)`
  color: #619092;
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  &.active {
    color: #506c6d;
  }

  ${isMobile} {
    font: var(--S23);
  }

  ${isTablet} {
    font: var(--S30);
  }
`;
