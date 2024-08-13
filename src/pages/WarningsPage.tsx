import WarningItem from '@/components/warnings/WarningItem';
import * as S from '@/styles/warnings/WarningsPageStyle';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type WarningList = {
  id: number;
  title: string;
  image: string;
};

const dummyList = [
  {
    id: 1,
    title: '무섭다 무서워 ㄷㄷ',
    image: '',
  },
  {
    id: 2,
    title: '무섭다 무서워 ㄷㄷ무섭다 무서워 ㄷㄷ',
    image: '',
  },
  {
    id: 3,
    title: '무섭다 무서워 ㄷㄷ무섭다 무서워 ㄷㄷ무섭다 무서워 ㄷㄷ',
    image: '',
  },
  {
    id: 4,
    title: '무섭다 무서워 ㄷㄷ',
    image: '',
  },
  {
    id: 5,
    title: '무섭다 무서워 ㄷㄷ',
    image: '',
  },
  {
    id: 6,
    title: '무섭다 무서워 ㄷㄷ',
    image: '',
  },
  {
    id: 7,
    title: '무섭다 무서워 ㄷㄷ',
    image: '',
  },
];

const WarningsPage = () => {
  const navigate = useNavigate();
  const [list, setList] = useState<WarningList[]>([]);

  useEffect(() => {
    // const fetchInformation = async () => {
    //   const response = await getGovern();
    //   if (response) {
    //     setList(dummyList);
    //   }
    // };

    // fetchInformation();
    setList(dummyList);
  }, []);

  return (
    <S.Container>
      <h1>주의사항</h1>
      <p>한국에서 이런 점을 조심해야 해요!</p>
      <S.ItemWrap>
        {list.map((data, index) => {
          return (
            <WarningItem
              key={index}
              image={data.image}
              title={data.title}
              onClick={() => navigate(`/warnings/${data.id}`)}
            />
          );
        })}
      </S.ItemWrap>
    </S.Container>
  );
};

export default WarningsPage;
