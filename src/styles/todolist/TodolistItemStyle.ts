import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1336px;
  padding: 24px 64px 65px;
  background-color: #ffffff;
  border-radius: 30px;
  box-shadow: 0px 0px 20px rgba(192, 224, 226, 0.5);
  margin-bottom: 171px;

  > h3 {
    font: var(--E35);
    color: #304748;
    margin-top: 25px;
  }
`;

export const CheckWrap = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 19px;
  align-items: center;

  > p {
    font: var(--M32);
    color: #000000;
  }
`;
