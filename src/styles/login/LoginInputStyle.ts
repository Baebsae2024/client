import styled from 'styled-components';

export const InputWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 30px 40px;
  border-radius: 100px;
  box-shadow: 0px 0px 20px rgba(192, 224, 226, 0.5);
  background-color: #fff;
  transition: all 0.3s ease-in-out;
`;

export const Input = styled.input`
  font: var(--M35);
  color: #253536;
  border: none;
  width: 100%;

  &::placeholder {
    color: #7e9697;
  }
`;
