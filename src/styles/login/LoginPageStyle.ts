import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 70px;

  > h1 {
    font: var(--E40);
    color: #000;
    margin-bottom: 70px;
    user-select: none;
    transition: all 0.3s ease-in-out;
  }
`;

export const LoginWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 687px;
  gap: 23px;
  transition: all 0.3s ease-in-out;
`;
