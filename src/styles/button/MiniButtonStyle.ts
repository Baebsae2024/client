import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font: var(--M20);
  color: #69b0b5;
  border: 3px solid #69b0b5;
  background-color: #fff;
  padding: 7px 16px 3px;
  box-shadow: 0px 0px 10px rgba(192, 224, 226, 0.3);
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #69b0b5;
    color: #fff;
  }

  &:disabled {
    background-color: #d8d8d8;
  }

  &:disabled:hover {
    background-color: #d8d8d8;
  }
`;
