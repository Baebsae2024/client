import styled from 'styled-components';

export const ButtonWrap = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font: var(--E23);
  color: #fff;
  border: none;
  background-color: #69b0b5;
  padding: 10px 33px;
  box-shadow: 0px 0px 20px rgba(192, 224, 226, 0.5);
  border-radius: 100px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #509ca0;
  }

  &:disabled {
    background-color: #d8d8d8;
  }

  &:disabled:hover {
    background-color: #d8d8d8;
  }
`;
