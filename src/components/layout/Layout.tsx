import Header from '@/components/layout/Header';
import { Outlet } from 'react-router-dom';
import * as S from '@/styles/layout/LayoutStyle';

const Layout = () => {
  return (
    <S.Container>
      <Header />
      <S.Main>
        <Outlet />
      </S.Main>
    </S.Container>
  );
};

export default Layout;
