import CommunityItem from '@/components/main/CommunityItem';
import HeadItem from '@/components/main/HeadItem';
import TodolistItem from '@/components/todolist/TodolistItem';
import * as S from '@/styles/main/MainPageStyle';
//import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  //const navigate = useNavigate();
  const dummyData = [
    {
      id: 1,
      title: '짜장면을 먹다가 단무지를 씹었는데 혀도 같이 씹어버림...',
      heartLength: 10,
    },
    {
      id: 2,
      title:
        '짜장면을 먹다가 단무지를 씹었는데짜장면을 먹다가 단무지를 씹었는데 혀도 같이 씹어버림...',
      heartLength: 133,
    },
    {
      id: 3,
      title: '짜장면을 먹다가 단무지를 씹었는데 혀도 같이 씹어버림...',
      heartLength: 1,
    },
  ];

  return (
    <S.Container>
      <S.SwipeWrap>
        <S.LeftWrap>
          {/* 스와이프 수정 예정 */}
          <h1>지하철에서 이런짓을 하면 민폐?</h1>
          <div>자세히 보기</div>
        </S.LeftWrap>
        <S.RightWrap></S.RightWrap>
      </S.SwipeWrap>
      <HeadItem
        title="커뮤니티"
        description="당신과 마음에 맞는 친구를 만나보세요!"
      />
      <S.CommunityWrap>
        {dummyData.map((data, index) => {
          return (
            <CommunityItem
              key={index}
              title={data.title}
              heartLength={data.heartLength}
            />
          );
        })}
      </S.CommunityWrap>
      <hr />
      <HeadItem
        title="투두리스트"
        description="꾸준히 하면 좋은 일이 생길지도..?"
      />
      <TodolistItem />
    </S.Container>
  );
};

export default MainPage;
