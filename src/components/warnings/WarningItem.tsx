import * as S from '@/styles/warnings/WarningItemStyle';

const WarningItem = ({
  image,
  title,
  onClick,
}: {
  image: string;
  title: string;
  onClick: () => void;
}) => {
  return (
    <S.Container onClick={onClick}>
      <img src={image} alt="" />
      <span>#주의사항</span>
      <h1>{title}</h1>
    </S.Container>
  );
};

export default WarningItem;
