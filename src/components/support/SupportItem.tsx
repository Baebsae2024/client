import * as S from '@/styles/support/SupportItemStyle';
import { SupportResult } from '@/types/support';
import ShortLine from '@assets/icons/ShortLine.svg?react';

const SupportItem = ({
  name,
  content,
  department,
  call,
  cycle,
  give,
  link,
}: SupportResult) => {
  return (
    <S.Container>
      <h1>{name}</h1>
      <p>{content}</p>
      <ShortLine style={{ marginTop: 13, marginBottom: 13 }} />
      <div>
        <h2>담당부처</h2>
        <h3>{department}</h3>
      </div>
      <div>
        <h2>지원주기</h2>
        <h3>{call}</h3>
      </div>
      <div>
        <h2>제공유형</h2>
        <h3>{cycle}</h3>
      </div>
      <div>
        <h2>문의처</h2>
        <h3>{give}</h3>
      </div>
      <ShortLine />
      <button onClick={() => window.open(link, '_blank')}>자세히 보기</button>
    </S.Container>
  );
};

export default SupportItem;
