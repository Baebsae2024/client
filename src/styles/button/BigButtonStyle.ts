import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 11px;
  font: var(--B20);
  color: #fff;
  border: none;
  background-color: #69b0b5;
  padding: 12px 26px;
  border-radius: 100px;
  box-shadow: 0px 0px 20px rgba(192, 224, 226, 0.5);
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #5aa2a7;
  }

  &:disabled {
    background-color: #a7c9cb;
  }

  &:disabled:hover {
    background-color: #a7c9cb;
  }
`;
