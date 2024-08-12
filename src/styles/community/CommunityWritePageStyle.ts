import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 153px;
  padding-bottom: 196px;
  width: 1308px;
`;

export const HeadWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 16px;
`;

export const LeftWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 31px;

  > img {
    width: 104px;
    height: 104px;
    border: 2px solid #c0e2da;
    border-radius: 100px;
    background-color: #fff;
  }

  > h1 {
    font: var(--E35);
    color: #506c6d;
  }
`;

export const RightWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  > h2 {
    font: var(--E30);
    color: #69b0b5;
  }
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  > input {
    border-radius: 30px;
    padding: 32px 36px;
    font: var(--E35);
    border: none;
    box-shadow: 0px 0px 20px rgba(192, 224, 226, 0.5);
    margin-bottom: 27px;
  }

  > textarea {
    border-radius: 30px;
    padding: 32px 36px;
    font: var(--M30);
    border: none;
    height: 620px;
    box-shadow: 0px 0px 20px rgba(192, 224, 226, 0.5);
    margin-bottom: 24px;
    resize: none;
  }
`;

export const LastWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ImgButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  background-color: #fff;
  box-shadow: 0px 0px 20px rgba(192, 224, 226, 0.5);
  width: 216px;
  height: 56px;
  border-radius: 20px;
  color: #69b0b5;
  font: var(--E20);
  cursor: pointer;
`;

export const BtnWrap = styled.div`
  font: var(--E23);
  color: #fff;
  background-color: #69b0b5;
  width: 154px;
  height: 56px;
  box-shadow: 0px 0px 20px rgba(192, 224, 226, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;

  cursor: pointer;
`;

export const ImgWrap = styled.div`
  margin-top: 24px;
  gap: 24px;

  > img {
    height: 208px;
    border-radius: 20px;
  }
`;
