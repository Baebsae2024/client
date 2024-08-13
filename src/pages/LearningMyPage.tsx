import LearningItem from '@/components/learning/LearningItem';
import HeadItem from '@/components/main/HeadItem';
import * as S from '@/styles/learning/LearningAllPageStyle';
import { useNavigate } from 'react-router-dom';

const LearningMyPage = () => {
  const navigate = useNavigate();

  const dummyList = [
    {
      id: 1,
      image: '',
      title: '지하철에서 이런짓하면 민폐?',
    },
    {
      id: 2,
      image: '',
      title: '지하철에서 이런짓하면 민폐?',
    },
    {
      id: 3,
      image: '',
      title: '지하철에서 이런짓하면 민폐?',
    },
    {
      id: 4,
      image: '',
      title: '지하철에서 이런짓하면 민폐?',
    },
    {
      id: 5,
      image: '',
      title: '지하철에서 이런짓하면 민폐?',
    },
    {
      id: 6,
      image: '',
      title: '지하철에서 이런짓하면 민폐?',
    },
  ];

  return (
    <S.Container>
      <HeadItem title="내가 배운 Tip" description="나는 이런걸 학습했어요!" />
      <S.ItemWrap>
        {dummyList.map((data, index) => {
          return (
            <LearningItem
              key={index}
              image={data.image}
              title={data.title}
              onClick={() => navigate(`/learning/my/${data.id}`)}
            />
          );
        })}
      </S.ItemWrap>
    </S.Container>
  );
};

export default LearningMyPage;
