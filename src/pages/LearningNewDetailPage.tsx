import HeadItem from '@/components/main/HeadItem';
import * as S from '@styles/learning/LearningAllDetailPageStyle';
import { useNavigate } from 'react-router-dom';

const LearningNewDetailPage = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <HeadItem title="새로운 Tip" description="새로운 지식을 학습하세요!" />
      <S.BtnWrap onClick={() => navigate(-1)}>목록 보기</S.BtnWrap>
      <S.TitleWrap>지하철에서는 신발을 벗고 타야한다?</S.TitleWrap>
      <S.DescWrap>
        <div>
          진짜임?ㄹㅇ임 지하철에서 신발 신고 탔더니 다들 쳐다보더라ㅋ
          진짜임?ㄹㅇ임 지하철에서 신발 신고 탔더니 다들 쳐다보더라ㅋ
          진짜임?ㄹㅇ임 지하철에서 신발 신고 탔더니 다들 쳐다보더라ㅋ
          진짜임?ㄹㅇ임 지하철에서 신발 신고 탔더니 다들 쳐다보더라ㅋ
          진짜임?ㄹㅇ임 지하철에서 신발 신고 탔더니 다들 쳐다보더라ㅋ
        </div>
        <img src="" alt="" />
      </S.DescWrap>
    </S.Container>
  );
};

export default LearningNewDetailPage;
