import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const QuizWrap = styled.div`
  width: 1016px;
  min-height: 666px;
  background-color: #ffffff;
  border-radius: 30px;
  box-shadow: 0px 0px 20px rgba(192, 224, 226, 0.5);
  padding: 32px 52px;

  > h1 {
    font: var(--E80);
    color: #46d4dd;
  }

  > h2 {
    font: var(--E40);
    color: #000000;
    margin-top: 74px;
    margin-bottom: 103px;
    text-align: center;
  }
`;

export const BoxsWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 59px;
`;

export const BoxWrap = styled.div`
  border: 10px solid #253536;
  filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.25));
  border-radius: 30px;
  width: 185px;
  height: 185px;
  display: flex;
  justify-content: center;
  align-items: center;
  font: var(--E100);
  color: #253536;
  cursor: pointer;

  &:hover {
    border: 10px solid #46d4dd;
    color: #46d4dd;
    filter: drop-shadow(0px 0px 20px rgba(192, 224, 226, 0.5));
  }
`;
