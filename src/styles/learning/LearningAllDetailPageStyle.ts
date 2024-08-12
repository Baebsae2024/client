import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 153px;
  padding-bottom: 196px;
  position: relative;
`;

export const TitleWrap = styled.div`
  box-shadow: 0px 0px 20px rgba(192, 224, 226, 0.5);
  width: 1308px;
  padding: 32px 36px;
  background-color: #fff;
  border-radius: 30px;
  font: var(--E35);
  margin-bottom: 27px;
`;

export const DescWrap = styled.div`
  box-shadow: 0px 0px 20px rgba(192, 224, 226, 0.5);
  width: 1308px;
  padding: 32px 36px;
  background-color: #fff;
  border-radius: 30px;

  > div {
    width: 100%;
    font: var(--S32);
  }

  > img {
    margin-top: 38px;
    width: 100%;
    height: 379px;
    background-color: #d9d9d9;
    border-radius: 20px;
  }
`;

export const BtnWrap = styled.div`
  font: var(--E23);
  color: #fff;
  background-color: #69b0b5;
  width: 131px;
  height: 54px;
  box-shadow: 0px 0px 20px rgba(192, 224, 226, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  position: absolute;
  right: 0;
  margin-top: 85px;

  cursor: pointer;
`;
