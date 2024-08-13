import * as S from '@/styles/support/SupportPageStyle';
import BigLongLine from '@assets/icons/BigLongLine.svg?react';

const SupportPage = () => {
  return (
    <S.Container>
      <h1>예상 지원금 찾기</h1>
      <p>최대 000만원까지 받을 수 있어요!</p>
      <BigLongLine style={{ marginTop: 65, marginBottom: 65 }} />
    </S.Container>
  );
};

export default SupportPage;
