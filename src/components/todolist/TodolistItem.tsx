import * as S from '@/styles/todolist/TodolistItemStyle';
import CheckBoxClickIcon from '@assets/icons/CheckBoxClick.svg?react';
import CheckBoxIcon from '@assets/icons/CheckBox.svg?react';

const TodolistItem = () => {
  const dummyList = [
    {
      id: 1,
      isChecked: false,
      mission: '정보 제공 글 하나 읽기',
    },
  ];

  const dummyList2 = [
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
  ];

  return (
    <S.Container>
      <h3>필수 미션</h3>
      {dummyList.map((data, index) => {
        return (
          <S.CheckWrap key={index}>
            {data.isChecked ? <CheckBoxClickIcon /> : <CheckBoxIcon />}
            <p>{data.mission}</p>
          </S.CheckWrap>
        );
      })}
      <h3>심화 미션</h3>
      {dummyList2.map((data, index) => {
        return (
          <S.CheckWrap key={index}>
            {data.isChecked ? <CheckBoxClickIcon /> : <CheckBoxIcon />}
            <p>{data.mission}</p>
          </S.CheckWrap>
        );
      })}
    </S.Container>
  );
};

export default TodolistItem;
