import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 153px;
  padding-bottom: 180px;
  position: relative;

  hr {
    width: 1308px;
    margin: 126px 0;
    border: 1.5px dashed #588c83;
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
  margin-top: -80px;

  cursor: pointer;
`;

export const ItemWrap = styled.div`
  display: flex;
  gap: 54px;
`;
