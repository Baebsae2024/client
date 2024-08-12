import * as S from '@/styles/quiz/QuizPageStyle';
import HeadItem from '@/components/main/HeadItem';
import TodolistItem from '@/components/todolist/TodolistItem';
import { useState } from 'react';
import TodolistModal from '@/components/modal/TodolistModal';
import { useNavigate } from 'react-router-dom';
import BackDrop from '@/components/layout/BackDrop';

const TodolistPage = () => {
  const [isModal, setIsModal] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <S.Container>
        <HeadItem
          title="투두리스트"
          description="꾸준히 하면 좋은 일이 생길지도..?"
        />
        <TodolistItem setIsModal={setIsModal} />
      </S.Container>
      {isModal && (
        <BackDrop
          children={
            <TodolistModal
              onClick={() => {
                setIsModal(false);
                navigate('/community/write');
              }}
              onCancel={() => setIsModal(false)}
            />
          }
          isOpen={isModal}
        />
      )}
    </>
  );
};

export default TodolistPage;
