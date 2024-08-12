import * as S from '@styles/community/CommunityItemStyle';
import HeartFillIcon from '@assets/icons/HeartFill.svg?react';

const CommunityItem = ({
  title,
  content,
  heartLength,
  onClick,
}: {
  title: string;
  content: string;
  heartLength: number;
  onClick: () => void;
}) => {
  return (
    <S.Container onClick={onClick}>
      <S.LeftWrap>
        <h1>{title}</h1>
        <h2>{content}</h2>
      </S.LeftWrap>
      <S.RightWrap>
        <HeartFillIcon />
        <p>{heartLength}</p>
      </S.RightWrap>
    </S.Container>
  );
};

export default CommunityItem;
