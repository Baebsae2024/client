import Button from '@/components/button/Button';
import HeadItem from '@/components/main/HeadItem';
import * as S from '@styles/learning/LearningAllDetailPageStyle';
import { useNavigate } from 'react-router-dom';

const LearningMyDetailPage = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <HeadItem title="내가 배운 Tip" description="나는 이런걸 학습했어요!" />
      <S.BtnWrap>
        <Button
          idDisabled={false}
          text="목록 보기"
          onClick={() => navigate(-1)}
        />
      </S.BtnWrap>
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

export default LearningMyDetailPage;
