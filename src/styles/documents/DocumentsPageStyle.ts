import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 78px;
  padding-bottom: 115px;

  > h1 {
    text-align: center;
    font: var(--B35);
    color: #000;
    margin-bottom: 18px;
  }

  > p {
    text-align: center;
    font: var(--M28-42);
    color: #000;
    margin-bottom: 65px;
  }

  > img {
    margin-top: 25px;
    margin-bottom: 19px;
    height: 285px;
  }
`;

export const NoneImage = styled.div`
  margin-top: 25px;
  margin-bottom: 19px;
  width: 232px;
  height: 285px;
  border: 2px solid #c0e0e2;
`;

export const LanguageWrap = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 19px;

  > span {
    font: var(--M28);
    color: #000;
  }
`;

export const ResultText = styled.h1`
  text-align: center;
  font: var(--B32);
  margin-bottom: 38px;
`;

export const ResultWrap = styled.div`
  display: flex;
  gap: 38px;
`;

export const TextBox = styled.div`
  border: 3px solid #c0e0e2;
  width: 500px;
  box-shadow: 0px 0px 20px rgba(192, 224, 226, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 36px 34px 34px 34px;

  > h2 {
    text-align: center;
    font: var(--M28);
    color: #000;
    margin-bottom: 30px;
  }

  > p {
    font: var(--M26-50);
    padding: 32px 0 0;
    color: #000;
  }
`;
