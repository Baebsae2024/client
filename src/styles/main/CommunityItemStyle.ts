import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 422px;
  height: 390px;
  padding: 59px 38px 0;
  background-color: #ffffff;
  border-radius: 30px;
  position: relative;
  box-shadow: 0px 0px 20px rgba(192, 224, 226, 0.5);

  > h1 {
    height: 220px;
    font: var(--B33);
    color: #304748;
  }
`;

export const HeartWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: absolute;
  right: 31px;
  bottom: 23px;

  > p {
    font: var(--B25);
    color: #69b0b5;
    margin-top: 2px;
  }
`;
