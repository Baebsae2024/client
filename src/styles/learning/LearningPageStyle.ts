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
  position: absolute;
  right: 0;
  margin-top: -80px;
`;

export const ItemWrap = styled.div`
  display: flex;
  gap: 54px;
`;
