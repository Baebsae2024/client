import * as S from '@/styles/modal/HelpModalStyle';
import MiniButton from '../button/MiniButton';

const HelpModal = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <S.Container>
      <h1>복지위기 상황에 놓인 국민 누구라도 언제든지 알려주세요</h1>
      <p>
        본인(이웃)이 겪고 있는 경제적 어려움, 건강문제, 고립∙고독 등 복지 위기
        상황과 도움이 필요한 내용을 작성해 신청하면 관활 주민센터의 담당자가
        연락해 상담을 진행하고 상담 결과에 따라 지원가능한 복지 서비스를 지원,
        연계해 드립니다.
      </p>
      <span>※ 자살예방 상담센터(109)</span>
      <MiniButton text="확인" onClick={handleClick} idDisabled={false} />
    </S.Container>
  );
};

export default HelpModal;
