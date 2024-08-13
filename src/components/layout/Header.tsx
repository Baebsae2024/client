import * as S from '@/styles/layout/HeaderStyle';
import LogoIcon from '@/assets/icons/Logo.png';
import MoneyIcon from '@/assets/icons/Money.svg?react';
import { useNavigate } from 'react-router-dom';
import BigButton from '../button/BigButton';

const Header = () => {
  const navigate = useNavigate();

  return (
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
  );
};

export default Header;
