import * as S from '@/styles/main/MainPageStyle';
import { useEffect, useState } from 'react';
import LongLine from '@assets/icons/LongLine.svg?react';

const MainPage = () => {
  const [selectedMenu, setSelectedMenu] = useState('비자 발급');
  const [information, setInformation] = useState({
    content: '',
    image: '',
  });

  const menuItems = [
    '비자 발급',
    '입국 신고',
    '외국인 등록',
    '건강 보험 가입',
    '주거지 신고',
    '세금 관련 등록',
  ];

  const dummyData = {
    content:
      '지하철에서 이런 행동 민폐?지하철에서 이런 행동 민폐?지하철에서 이런 행동 민폐?지하철에서 이런 행동 민폐?지하철에서 이런 행동 민폐?지하철에서 이런 행동 민폐?지하철에서 이런 행동 민폐?지하철에서 이런 행동 민폐?지하철에서 이런 행동 민폐?지하철에서 이런 행동 민폐?지하철에서 이런 행동 민폐?지하철에서 이런 행동 민폐?지하철에서 이런 행동 민폐?지지하철에서 이런 행동 민폐?지하철에서 이런 행동 민폐?지하철에서 이런 행동 민폐?지하철에서 이런 행동 민폐?지하철에서 이런 행동 민폐?지하철에서 이런 행동 민폐?지하철에서 이런 행동 민폐?지하철에서 이런 행동 민폐?지하철에서 이런 행동 민폐?지하철에서 이런 행동 민폐?지하철에서 이런 행동 민폐?지하철에서 이런 행동 민폐?지하철에서 이런 행동 민폐?지하철에서 이런 행동 민폐?지하철에서 이런 행동 민폐?지하철에서 이런 행동 민폐?',
    image: '',
  };

  useEffect(() => {
    setInformation(dummyData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedMenu]);

  const groupedMenuItems = [menuItems.slice(0, 3), menuItems.slice(3)];

  return (
    <S.Container>
      <h1>행정 절차</h1>
      {groupedMenuItems.map((group, groupIndex) => (
        <S.SelectedNav key={groupIndex}>
          {group.map((item, index) => (
            <>
              <S.MenuText
                key={item}
                onClick={() => setSelectedMenu(item)}
                selected={selectedMenu === item}
              >
                {item}
              </S.MenuText>
              {index < group.length - 1 && <span>|</span>}
            </>
          ))}
        </S.SelectedNav>
      ))}
      <S.TextBox>
        <h2>{selectedMenu} 방법</h2>
        <LongLine />
        <p>{information.content}</p>
        <img src={information.image} alt="" />
      </S.TextBox>
    </S.Container>
  );
};

export default MainPage;
