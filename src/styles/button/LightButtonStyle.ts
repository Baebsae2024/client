import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 112px;
  height: 45px;

  font: var(--E20);
  color: #69b0b5;
  border: 2px solid #69b0b5;
  background-color: #fff;
  padding: 0;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #69b0b5;
    color: #fff;
  }
`;
