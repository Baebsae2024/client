import * as S from '@/styles/main/MainPageStyle';
import React, { useEffect, useState } from 'react';
import LongLine from '@assets/icons/LongLine.svg?react';
import { getGovern } from '@/apis/getGovern';

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

  useEffect(() => {
    const fetchInformation = async () => {
      const response = await getGovern({
        title: selectedMenu.replace(/\s+/g, ''),
      });
      setInformation({
        content: response[0].body,
        image: response[0].img,
      });
    };

    fetchInformation();
  }, [selectedMenu]);

  const groupedMenuItems = [menuItems.slice(0, 3), menuItems.slice(3)];

  return (
    <S.Container>
      <h1>행정 절차</h1>
      {groupedMenuItems.map((group, groupIndex) => (
        <S.SelectedNav key={groupIndex}>
          {group.map((item, index) => (
            <React.Fragment key={index}>
              <S.MenuText
                onClick={() => setSelectedMenu(item)}
                selected={selectedMenu === item}
              >
                {item}
              </S.MenuText>
              {index < group.length - 1 && <span>|</span>}
            </React.Fragment>
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
