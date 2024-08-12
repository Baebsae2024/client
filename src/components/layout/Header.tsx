import useNSMediaQuery from '@/hooks/useNSMediaQuery';
import * as S from '@/styles/layout/HeaderStyle';
import BackDrop from './BackDrop';
import { useEffect, useState } from 'react';
import HamMenuIcon from '@/assets/icons/HamMenu.svg?react';
import HamMenuMIcon from '@/assets/icons/HamMenuM.svg?react';
import HamMenuTIcon from '@/assets/icons/HamMenuT.svg?react';
import LogoIcon from '@/assets/icons/Logo.svg?react';
import LogoMiniIcon from '@/assets/icons/LogoMini.svg?react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { isMobileOrTablet, isTablet, isMobile, isDesktop } = useNSMediaQuery();
  const [isViewHamItem, setIsViewHamItem] = useState(false);
  const isAccessToken = !!localStorage.getItem('accessToken');
  const navigate = useNavigate();

  useEffect(() => {
    if (isDesktop) {
      setIsViewHamItem(false);
    }
  }, [isDesktop]);

  const handleSignOut = async () => {
    // if (isAccessToken) {
    //   const response = await postSignout(handleUnauthorized);
    //   if (response.check) {
    //     console.log('로그아웃');
    //     localStorage.removeItem('accessToken');
    //     localStorage.removeItem('refreshToken');
    //   }
    // }
  };

  return (
    <>
      {isMobileOrTablet ? (
        <>
          <S.Container>
            <LogoMiniIcon onClick={() => navigate('/')} />
            <HamMenuIcon onClick={() => setIsViewHamItem(!isViewHamItem)} />
          </S.Container>
          {isViewHamItem && (
            <BackDrop
              children={
                <S.HamNav>
                  {isMobile && (
                    <HamMenuMIcon
                      onClick={() => setIsViewHamItem(!isViewHamItem)}
                    />
                  )}
                  {isTablet && (
                    <HamMenuTIcon
                      onClick={() => setIsViewHamItem(!isViewHamItem)}
                    />
                  )}
                  <S.HamNavLinks to="/learning">학습</S.HamNavLinks>
                  <S.HamNavLinks to="/quiz">퀴즈</S.HamNavLinks>
                  <S.HamNavLinks to="/community">커뮤니티</S.HamNavLinks>
                  <S.HamNavLinks to="/todolist">투두리스트</S.HamNavLinks>
                  <S.HamNavLinks
                    to="/login"
                    onClick={() => isAccessToken && handleSignOut}
                  >
                    {isAccessToken ? '로그아웃' : '로그인'}
                  </S.HamNavLinks>
                </S.HamNav>
              }
              isOpen={isViewHamItem}
              onBackdropClick={() => setIsViewHamItem(!isViewHamItem)}
            />
          )}
        </>
      ) : (
        <S.Container>
          <LogoIcon onClick={() => navigate('/')} />
          <S.Nav>
            <S.NavLinks to="/learning">학습</S.NavLinks>
            <S.NavLinks to="/quiz">퀴즈</S.NavLinks>
            <S.NavLinks to="/community">커뮤니티</S.NavLinks>
            <S.NavLinks to="/todolist">투두리스트</S.NavLinks>
            <S.NavLinks
              to="/login"
              onClick={() => isAccessToken && handleSignOut}
            >
              {isAccessToken ? '로그아웃' : '로그인'}
            </S.NavLinks>
          </S.Nav>
        </S.Container>
      )}
    </>
  );
};

export default Header;
