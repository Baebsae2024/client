import * as S from '@/styles/layout/HeaderStyle';
import LogoIcon from '@/assets/icons/Logo.png';
import MoneyIcon from '@/assets/icons/Money.svg?react';
import { useNavigate } from 'react-router-dom';
import BigButton from '../button/BigButton';
import HamMenuIcon from '@/assets/icons/HamMenu.svg?react';
import HamMenuMIcon from '@/assets/icons/HamMenuM.svg?react';
import HamMenuTIcon from '@/assets/icons/HamMenuT.svg?react';
import { useEffect, useState } from 'react';
import useYMediaQuery from '@/hooks/useYMediaQuery';
import BackDrop from './BackDrop';

const Header = () => {
  const navigate = useNavigate();
  const { isMobileOrTablet, isTablet, isMobile, isDesktop } = useYMediaQuery();
  const [isViewHamItem, setIsViewHamItem] = useState(false);

  useEffect(() => {
    if (isDesktop) {
      setIsViewHamItem(false);
    }
  }, [isDesktop]);

  return (
    <>
      {isMobileOrTablet ? (
        <S.Container>
          <img src={LogoIcon} onClick={() => navigate('/')} height={122} />
          <HamMenuIcon onClick={() => setIsViewHamItem(!isViewHamItem)} />
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
                  <S.HamNavLinks to="/">행정 절차</S.HamNavLinks>
                  <S.HamNavLinks to="/warnings">주의사항</S.HamNavLinks>
                  <S.HamNavLinks to="/documents">문서 확인</S.HamNavLinks>
                  <S.HamNavLinks to="/support">예상 지원금 찾기</S.HamNavLinks>
                </S.HamNav>
              }
              isOpen={isViewHamItem}
              onBackdropClick={() => setIsViewHamItem(!isViewHamItem)}
            />
          )}
        </S.Container>
      ) : (
        <S.Container>
          <img src={LogoIcon} onClick={() => navigate('/')} height={122} />
          <S.Nav>
            <S.NavLinks to="/">행정 절차</S.NavLinks>
            <S.NavLinks to="/warnings">주의사항</S.NavLinks>
            <S.NavLinks to="/documents">문서 확인</S.NavLinks>
            <BigButton
              idDisabled={false}
              Icon={<MoneyIcon />}
              text="예상 지원금 찾기"
              onClick={() => navigate('/support')}
            />
          </S.Nav>
        </S.Container>
      )}
    </>
  );
};

export default Header;
