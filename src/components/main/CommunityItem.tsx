import * as S from '@/styles/main/CommunityItemStyle';
import HeartFillIcon from '@assets/icons/HeartFill.svg?react';

const CommunityItem = ({
  title,
  heartLength,
}: {
  title: string;
  heartLength: number;
}) => {
  return (
    <S.Container>
      <h1>{title}</h1>
      <S.HeartWrap>
        <HeartFillIcon />
        <p>{heartLength}</p>
      </S.HeartWrap>
    </S.Container>
  );
};

export default CommunityItem;
