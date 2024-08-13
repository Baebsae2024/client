import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 78px;
  padding-bottom: 115px;

  > h1 {
    text-align: center;
    font: var(--B35);
    color: #000;
    margin-bottom: 10px;
  }

  > p {
    font: var(--M28);
    color: #000;
    margin-bottom: 12px;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 1012px;
  margin-bottom: 12px;
`;

export const TextBox = styled.div`
  border: 3px solid #c0e0e2;
  width: 1012px;
  box-shadow: 0px 0px 20px rgba(192, 224, 226, 0.5);
  padding: 42px 42px 40px 42px;

  > h2 {
    text-align: center;
    font: var(--M32-600);
    color: #000;
    margin-bottom: 30px;
  }

  > p {
    font: var(--M26-50);
    padding-top: 20px;
    color: #000;
    white-space: pre-line;
  }

  > img {
    display: block;
    margin: 20px auto 0;
    height: 371px;
    width: 371px;
    background-color: #d9d9d9;
  }
`;
