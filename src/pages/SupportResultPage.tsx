import { getSupport } from '@/apis/getSupport';
import SupportItem from '@/components/support/SupportItem';
import * as S from '@/styles/support/SupportResultPageStyle';
import { SupportResult } from '@/types/support';
import BigLongLine from '@assets/icons/BigLongLine.svg?react';
import { useEffect, useState } from 'react';

const SupportResultPage = () => {
  const [resultList, setResultList] = useState<SupportResult[]>([]);

  useEffect(() => {
    const fetchInformation = async () => {
      const response = await getSupport();
      if (response) {
        setResultList(response.data);
      }
    };

    fetchInformation();
  }, []);

  return (
    <S.Container>
      <h1>예상 지원금 찾기</h1>
      <p>신청 가능한 지원금이 {resultList.length}개가 나왔어요!</p>
      <BigLongLine style={{ marginBottom: 65 }} />
      <S.GridWrap>
        {resultList.map((data, index) => {
          return (
            <SupportItem
              key={index}
              name={data.name}
              content={data.content}
              department={data.department}
              call={data.call}
              cycle={data.cycle}
              give={data.give}
              link={data.link}
            />
          );
        })}
      </S.GridWrap>
    </S.Container>
  );
};

export default SupportResultPage;
