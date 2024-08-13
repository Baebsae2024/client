import Button from '@/components/button/Button';
import LearningItem from '@/components/learning/LearningItem';
import HeadItem from '@/components/main/HeadItem';
import * as S from '@/styles/learning/LearningPageStyle';
import { useNavigate } from 'react-router-dom';

const LearningPage = () => {
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
  ];

  return (
    <S.Container>
      <div>
        <HeadItem title="새로운 Tip" description="새로운 지식을 학습하세요!" />
        <S.BtnWrap>
          <Button
            idDisabled={false}
            text="더보기"
            onClick={() => navigate('/learning/new')}
          />
        </S.BtnWrap>
        <S.ItemWrap>
          {dummyList.map((data, index) => {
            return (
              <LearningItem
                key={index}
                image={data.image}
                title={data.title}
                onClick={() => navigate(`/learning/new/${data.id}`)}
              />
            );
          })}
        </S.ItemWrap>
      </div>
      <hr />
      <div>
        <HeadItem title="내가 배운 Tip" description="나는 이런걸 학습했어요!" />
        <S.BtnWrap>
          <Button
            idDisabled={false}
            text="더보기"
            onClick={() => navigate('/learning/my')}
          />
        </S.BtnWrap>
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
      </div>
    </S.Container>
  );
};

export default LearningPage;
