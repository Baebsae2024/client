import BackDrop from '@/components/layout/BackDrop';
import QuizModal from '@/components/modal/QuizModal';
import * as S from '@/styles/quiz/QuizPageStyle';
import { useState } from 'react';

const QuizPage = () => {
  const [isModal, setIsModal] = useState(false);

  return (
    <>
      <S.Container>
        <S.QuizWrap>
          <h1>QUIZ</h1>
          <h2>밥 먹을 때는 쩝쩝뽭뽭하면서 먹어야 한다.</h2>
          <S.BoxsWrap>
            <S.BoxWrap onClick={() => setIsModal(true)}>O</S.BoxWrap>
            <S.BoxWrap onClick={() => setIsModal(true)}>X</S.BoxWrap>
          </S.BoxsWrap>
        </S.QuizWrap>
      </S.Container>
      {isModal && (
        <BackDrop
          children={<QuizModal onClick={() => setIsModal(false)} />}
          isOpen={isModal}
        />
      )}
    </>
  );
};

export default QuizPage;
