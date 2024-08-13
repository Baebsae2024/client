import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font: var(--M20);
  color: #69b0b5;
  border: 3px solid #69b0b5;
  background-color: #fff;
  padding: 6px 16px 4px;
  box-shadow: 0px 0px 10px rgba(192, 224, 226, 0.3);

  &:hover {
    background-color: #69b0b5;
    color: #fff;
  }

  &:disabled {
    background-color: #d8d8d8;
    border: 3px solid #d8d8d8;
    color: #fff;
  }

  &:disabled:hover {
    background-color: #d8d8d8;
    border: 3px solid #d8d8d8;
    color: #fff;
  }
`;
