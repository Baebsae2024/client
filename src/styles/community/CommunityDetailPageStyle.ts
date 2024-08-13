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
  margin-bottom: 24px;
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
    user-select: none;
  }
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 30px;
  padding: 32px 36px;
  box-shadow: 0px 0px 20px rgba(192, 224, 226, 0.5);
  margin-bottom: 24px;
  background-color: #fff;

  & > p {
    font: var(--E35);
    color: #364a4a;
  }
`;

export const HeartWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  > p {
    font: var(--B25);
    color: #69b0b5;
    margin-top: 2px;
    user-select: none;
  }
`;

export const ContentWrap = styled.div`
  border-radius: 30px;
  padding: 32px 36px;
  box-shadow: 0px 0px 20px rgba(192, 224, 226, 0.5);
  margin-bottom: 24px;
  background-color: #fff;

  > p {
    font: var(--M30-1);
    color: #364a4a;
  }

  > img {
    margin-top: 38px;
    height: 315px;
    width: 100%;
    background-color: #d9d9d9;
    border-radius: 20px;
  }
`;

export const ReportWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 3px;
  margin-top: 15px;
  cursor: pointer;

  > p {
    font: var(--R20);
    color: #506c6d;
  }
`;

export const CommentWrap = styled.div`
  margin-top: 15px;
  border-radius: 30px;
  padding: 32px 45px;
  box-shadow: 0px 0px 20px rgba(192, 224, 226, 0.5);
  background-color: #fff;
`;

export const CommentHead = styled.div`
  font: var(--E23);
  color: #000;
  padding-bottom: 15px;

  > span {
    color: #588c83;
  }
`;

export const CommentItem = styled.div`
  hr {
    border: 1.5px dashed #588c83;
    margin-top: 25px;
  }
`;

export const ItemHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;

  > span {
    font: var(--E20);
    color: #69b0b5;
    cursor: pointer;
  }
`;

export const RepliesHead = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 25px;
`;

export const HeadLeft = styled.div`
  display: flex;
  gap: 16px;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1px;

    > h1 {
      font: var(--E28);
      color: #506c6d;
    }

    > p {
      font: var(--M20);
      color: #588c83;
    }
  }
`;

export const CommentBody = styled.div`
  margin-top: 23px;
  font: var(--M23-1);
  color: #304748;
`;
