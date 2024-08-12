import * as S from '@/styles/todolist/TodolistItemStyle';
import CheckBoxClickIcon from '@assets/icons/CheckBoxClick.svg?react';
import CheckBoxIcon from '@assets/icons/CheckBox.svg?react';
import { SetStateAction, useState } from 'react';

const TodolistItem = ({
  setIsModal,
}: {
  setIsModal: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const [mandatoryMissions, setMandatoryMissions] = useState([
    {
      id: 1,
      isChecked: false,
      mission: '정보 제공 글 하나 읽기',
    },
  ]);

  const [advancedMissions, setAdvancedMissions] = useState([
    {
      id: 1,
      isChecked: false,
      mission: '정보 제공 글 하나 읽기',
    },
    {
      id: 2,
      isChecked: false,
      mission: '정보 제공 글 하나 읽기',
    },
  ]);

  const handleCheckClick = (id: number, type: string) => {
    if (type === 'mandatory') {
      setMandatoryMissions(
        mandatoryMissions.map(mission =>
          mission.id === id
            ? { ...mission, isChecked: !mission.isChecked }
            : mission,
        ),
      );
    } else if (type === 'advanced') {
      setAdvancedMissions(
        advancedMissions.map(mission =>
          mission.id === id
            ? { ...mission, isChecked: !mission.isChecked }
            : mission,
        ),
      );
    }
  };

  return (
    <S.Container>
      <h3>필수 미션</h3>
      {mandatoryMissions.map(data => (
        <S.CheckWrap
          key={data.id}
          onClick={() => handleCheckClick(data.id, 'mandatory')}
        >
          {data.isChecked ? <CheckBoxClickIcon /> : <CheckBoxIcon />}
          <p>{data.mission}</p>
        </S.CheckWrap>
      ))}
      <h3>심화 미션</h3>
      {advancedMissions.map(data => (
        <S.CheckWrap
          key={data.id}
          onClick={() => {
            handleCheckClick(data.id, 'advanced');
            if (!data.isChecked) {
              setIsModal(true);
            }
          }}
        >
          {data.isChecked ? <CheckBoxClickIcon /> : <CheckBoxIcon />}
          <p>{data.mission}</p>
        </S.CheckWrap>
      ))}
    </S.Container>
  );
};

export default TodolistItem;
