import SupportItem from '@/components/support/SupportItem';
import * as S from '@/styles/support/SupportResultPageStyle';
import BigLongLine from '@assets/icons/BigLongLine.svg?react';
import { useEffect, useState } from 'react';

type SupportInfo = {
  설명: string;
  담당부처: string;
  문의처: string;
  지원주기: string;
  제공유형: string;
  신청링크: string;
};

interface SupportData {
  [key: string]: SupportInfo;
}

const dummyData: SupportData = {
  '이주배경 청소년 지원': {
    설명: '다문화가족의 청소년과 국내로 이주해 온 청소년들이 우리 사회에 잘 적응할 수 있도록 상담과 진로지원 프로그램 등을 실시합니다.',
    담당부처: '여성가족부 학교밖청소년지원과',
    문의처: '02-733-7587',
    지원주기: '수시',
    제공유형: '프로그램/서비스(서비스)',
    신청링크:
      'https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00001114&wlfareInfoReldBztpCd=01',
  },
  '다문화가족 자녀 교육활동비 지원': {
    설명: '학교 적응이나 학습에 어려움을 겪는 저소득 다문화 자녀에게 학력격차 해소를 위한 교육활동비를 지원합니다.',
    담당부처: '여성가족부 다문화가족과',
    문의처: '1577-1366',
    지원주기: '년',
    제공유형: '현금지급',
    신청링크:
      'https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00001114&wlfareInfoReldBztpCd=01',
  },
  온가족보듬사업: {
    설명: '취약가족 및 긴급·위기가족이 가족 기능을 회복하고 정서적, 경제적 자립역량을 강화할 수 있도록 합니다.',
    담당부처: '여성가족부 가족정책과',
    문의처: '1577-9337',
    지원주기: '수시',
    제공유형: '프로그램/서비스(서비스)',
    신청링크:
      'https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00001114&wlfareInfoReldBztpCd=01',
  },
};

const SupportResultPage = () => {
  const [resultList, setResultList] = useState<SupportData>();

  useEffect(() => {
    setResultList(dummyData);
  }, []);

  return (
    <S.Container>
      <h1>예상 지원금 찾기</h1>
      <p>최대 000만원까지 받을 수 있어요!</p>
      <BigLongLine style={{ marginTop: 65, marginBottom: 65 }} />
      <S.GridWrap>
        {resultList &&
          Object.keys(resultList).map(key => (
            <SupportItem
              key={key}
              title={key}
              description={resultList[key].설명}
              department={resultList[key].담당부처}
              contact={resultList[key].문의처}
              frequency={resultList[key].지원주기}
              type={resultList[key].제공유형}
              link={resultList[key].신청링크}
            />
          ))}
      </S.GridWrap>
    </S.Container>
  );
};

export default SupportResultPage;
