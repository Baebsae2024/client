import MiniButton from '@/components/button/MiniButton';
import * as S from '@/styles/warnings/WarningDetailPageStyle';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LongLine from '@assets/icons/LongLine.svg?react';

const WarningDetailPage = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    image: '',
    title: '',
    content: '',
  });

  useEffect(() => {
    setData({
      image: '',
      title: '무섭다 무서워 ㄷㄷㄷㄷ 귀신이 나왔어~',
      content:
        '지하철에서 이런 행동 민폐?지하철에서 이런 행동 민폐?지하철에서 이런 행동 민폐?지하철에서 이런 행동 민폐?지하철에서 이런 행동 민폐?지하철에서 이런 행동 민폐?지하철에서 이런 행동 민폐?지하철에서 이런 행동 민폐?지하철에서 이런 행동 민폐?지하철에서 이런 행동 민폐?지하철에서 이런 행동 민폐?지하철에서 이런 행동 민폐?지하철에서 이런 행동 민폐?지s지하철에서 이런 행동 민폐?지하철에서 이런 행동 민폐?지하철에서 이런 행동 민폐?지하철에서 이런 행동 민폐?지하철에서 이런 행동 민폐?지하철에서 이런 행동 민폐?지하철에서 이런 행동 민폐?지하철에서 이런 행동 민폐?지하철에서 이런 행동 민폐?지하철에서 이런 행동 민폐?지하철에서 이런 행동 민폐?지하철에서 이런 행동 민폐?지하철에서 이런 행동 민폐?지하철에서 이런 행동 민폐?지하철에서 이런 행동 민폐?지하철에서 이런 행동 민폐?',
    });
  }, []);

  return (
    <S.Container>
      <h1>주의사항</h1>
      <p>2024년 주의해야 할 사기 수법</p>
      <S.BtnWrap>
        <MiniButton
          idDisabled={false}
          text="목록보기"
          onClick={() => navigate(-1)}
        />
      </S.BtnWrap>
      <S.TextBox>
        <h2>{data.title}</h2>
        <LongLine />
        <img src={data.image} alt="" />
        <p>{data.content}</p>
      </S.TextBox>
    </S.Container>
  );
};

export default WarningDetailPage;
