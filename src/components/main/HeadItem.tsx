import * as S from '@/styles/main/HeadItemStyle';

const HeadItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <S.Container>
      <h1>{title}</h1>
      <p>{description}</p>
    </S.Container>
  );
};

export default HeadItem;
