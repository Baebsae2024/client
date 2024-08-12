import * as S from '@/styles/modal/QuizModalStyle';
import DarkButton from '../button/DarkButton';

const QuizModal = ({ onClick }: { onClick: () => void }) => {
  return (
    <S.Container>
      <h1>정답이에요!</h1>
      <p>
        해설은 다음과 같아요~ 쩝쩝 거리면서 먹으면 그냥 쩝쩝이가 되어버려요~
        그러면 안돼안돼~~
      </p>
      <DarkButton text="확인" onClick={onClick} />
    </S.Container>
  );
};

export default QuizModal;
