import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 30px 18px;
  border-radius: 100px;
  box-shadow: 0px 0px 20px rgba(192, 224, 226, 0.5);
  color: #fff;
  font: var(--E40);
  background-color: #a0cbce;
  user-select: none;
  transition: all 0.3s ease-in-out;
  margin-top: 33px;

  &:disabled {
    background-color: #d8d8d8;
  }

  &:hover {
    background-color: #78babe;
  }

  &:disabled:hover {
    background-color: #d8d8d8;
  }
`;
