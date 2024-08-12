import * as S from '@/styles/learning/LearningItemStyle';

const LearningItem = ({
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
      <h2>{title}</h2>
    </S.Container>
  );
};

export default LearningItem;
