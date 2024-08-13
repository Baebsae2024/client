import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { isMobile, isTablet, isMobileOrTablet } from '@/hooks/Media';

export const Container = styled.div`
  display: flex;
  z-index: 10;
  margin: 40px 120px 0 120px;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease-in-out;

  ${isTablet} {
    margin: 20px 40px 0 40px;

    > img {
      transition: all 0.3s ease-in-out;
      height: 110px;
    }
  }

  ${isMobile} {
    margin: 20px 30px 0 30px;

    > img {
      transition: all 0.3s ease-in-out;
      height: 80px;
    }
  }
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  transition: all 0.3s ease-in-out;
`;

export const NavLinks = styled(NavLink)`
  text-decoration: none;
  font: var(--M22-22);
  color: #000;
  margin-top: 10px;
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
  background-color: #fff;
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
  color: #000;
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  &.active {
    color: #619092;
  }

  ${isMobileOrTablet} {
    font: var(--M20-23);
  }
`;
