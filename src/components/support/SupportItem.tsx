import * as S from '@/styles/support/SupportItemStyle';
import ShortLine from '@assets/icons/ShortLine.svg?react';

interface SupportItemProps {
  title: string;
  description: string;
  department: string;
  contact: string;
  frequency: string;
  type: string;
  link: string;
}

const SupportItem = ({
  title,
  description,
  department,
  contact,
  frequency,
  type,
  link,
}: SupportItemProps) => {
  return (
    <S.Container>
      <h1>{title}</h1>
      <p>{description}</p>
      <ShortLine style={{ marginTop: 13, marginBottom: 13 }} />
      <div>
        <h2>담당부처</h2>
        <h3>{department}</h3>
      </div>
      <div>
        <h2>지원주기</h2>
        <h3>{frequency}</h3>
      </div>
      <div>
        <h2>제공유형</h2>
        <h3>{type}</h3>
      </div>
      <div>
        <h2>문의처</h2>
        <h3>{contact}</h3>
      </div>
      <ShortLine />
      <button onClick={() => window.open(link, '_blank')}>자세히 보기</button>
    </S.Container>
  );
};

export default SupportItem;
