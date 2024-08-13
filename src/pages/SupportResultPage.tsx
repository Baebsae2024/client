import SupportItem from '@/components/support/SupportItem';
import * as S from '@/styles/support/SupportResultPageStyle';
import BigLongLine from '@assets/icons/BigLongLine.svg?react';
import { useEffect, useState } from 'react';

type SupportResult = {
  title: string;
  description: string;
  department: string;
  contact: string;
  frequency: string;
  type: string;
  link: string;
};

const dummyData: SupportResult[] = [
  {
    title: '유공자 의료비 지원',
    description: '유공자와 그 가족에게 의료비를 지원하는 제도입니다.',
    department: '보건복지부 기초의료보장과',
    contact: '129',
    frequency: '수시',
    type: '현금지급',
    link: 'https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00003190&wlfareInfoReldBztpCd=01',
  },
  {
    title: '유공자 의료비 지원유공자 의료비 지원',
    description:
      '유공자와 그 가족에게 의료비를 지에게 의료비를 지에게 의료비를 지에게 의료비를 지에게 의료비를 지원하는 제도유공자와 그 가족에게 의료비를 지원하는 제도입니다유공자와 그 가족에게 의료비를 지원하',
    department: '보건복지부 기초의료보장과',
    contact: '129',
    frequency: '수시',
    type: '현금지급',
    link: 'https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00003190&wlfareInfoReldBztpCd=01',
  },
  {
    title: '유공자 의료비 지원',
    description: '유공자와 그 가족에게 의료비를 지원하는 제도입니다.',
    department: '보건복지부 기초의료보장기초의료보장기초의료보장과',
    contact: '129',
    frequency: '수시',
    type: '현금지급',
    link: 'https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00003190&wlfareInfoReldBztpCd=01',
  },
];

const SupportResultPage = () => {
  const [resultList, setResultList] = useState<SupportResult[]>([]);

  useEffect(() => {
    // const fetchInformation = async () => {
    //   const response = await getSupport();
    //   if (response) {
    //     setResultList(response);
    //   }
    // };

    // fetchInformation();
    setResultList(dummyData);
  }, []);

  return (
    <S.Container>
      <h1>예상 지원금 찾기</h1>
      <p>최대 000만원까지 받을 수 있어요!</p>
      <BigLongLine style={{ marginTop: 65, marginBottom: 65 }} />
      <S.GridWrap>
        {resultList.map((data, index) => {
          return (
            <SupportItem
              key={index}
              title={data.title}
              description={data.description}
              department={data.department}
              contact={data.contact}
              frequency={data.frequency}
              type={data.type}
              link={data.link}
            />
          );
        })}
      </S.GridWrap>
    </S.Container>
  );
};

export default SupportResultPage;
