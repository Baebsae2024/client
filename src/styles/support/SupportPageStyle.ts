import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
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
    font: var(--M28);
    color: #000;
  }

  > h2 {
    font: var(--M25);
    color: #000;
    margin-bottom: 16px;
  }

  > input {
    font: var(--M20-23);
    color: #000;
    padding: 15px 20px;
    border: 3px solid #c0e0e2;
    width: 482px;
    margin-bottom: 30px;
  }
`;

export const RadioWrap = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  margin-bottom: 50px;

  > div {
    cursor: pointer;
    font: var(--M20-23);
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    user-select: none;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 13px;
`;
