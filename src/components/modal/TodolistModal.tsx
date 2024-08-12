import * as S from '@/styles/modal/ModalStyle';
import DarkButton from '../button/DarkButton';
import LightButton from '../button/LightButton';

const TodolistModal = ({
  onClick,
  onCancel,
}: {
  onClick: () => void;
  onCancel: () => void;
}) => {
  return (
    <S.Container>
      <h1>축하합니다!</h1>
      <p>자랑할 만한 순간을 공유해볼까요?</p>
      <S.BtnWrap>
        <DarkButton text="자랑하기" onClick={onClick} />
        <LightButton text="아니요" onClick={onCancel} />
      </S.BtnWrap>
    </S.Container>
  );
};

export default TodolistModal;
