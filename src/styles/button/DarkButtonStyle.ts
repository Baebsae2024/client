import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 112px;
  height: 45px;

  font: var(--E20);
  color: #fff;
  border: none;
  background-color: #69b0b5;
  padding: 0;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #509ca0;
  }
`;
