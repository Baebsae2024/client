import Button from '@/components/button/Button';
import CommunityItem from '@/components/community/CommunityItem';
import HeadItem from '@/components/main/HeadItem';
import * as S from '@styles/community/CommunityPageStyle';
import { useNavigate } from 'react-router-dom';

const CommunityPage = () => {
  const navigate = useNavigate();

  const dummyList = [
    {
      id: 1,
      title: '지하철에서 이런짓하면 민폐?',
      content: '지하철에서 이런짓하면 민폐라는데~~?',
      heartLength: 10,
    },
    {
      id: 2,
      title: '지하철에서 이런짓하면 민폐?',
      content: '지하철에서 이런짓하면 민폐라는데~~?',
      heartLength: 10,
    },
    {
      id: 3,
      title: '지하철에서 이런짓하면 민폐?',
      content: '지하철에서 이런짓하면 민폐라는데~~?',
      heartLength: 10,
    },
    {
      id: 4,
      title: '지하철에서 이런짓하면 민폐?',
      content: '지하철에서 이런짓하면 민폐라는데~~?',
      heartLength: 10,
    },
    {
      id: 5,
      title: '지하철에서 이런짓하면 민폐?',
      content: '지하철에서 이런짓하면 민폐라는데~~?',
      heartLength: 10,
    },
  ];

  return (
    <S.Container>
      <HeadItem
        title="커뮤니티"
        description="당신과 마음이 맞는 친구를 만나보세요!"
      />
      <S.BtnWrap>
        <Button
          idDisabled={false}
          text="글쓰기"
          onClick={() => navigate('/community/write')}
        />
      </S.BtnWrap>
      <S.ItemWrap>
        {dummyList.map((data, index) => {
          return (
            <CommunityItem
              key={index}
              title={data.title}
              content={data.content}
              heartLength={data.heartLength}
              onClick={() => navigate(`/community/${data.id}`)}
            />
          );
        })}
      </S.ItemWrap>
    </S.Container>
  );
};

export default CommunityPage;
