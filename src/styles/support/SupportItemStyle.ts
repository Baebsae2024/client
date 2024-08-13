import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 3px solid #c0e0e2;
  box-shadow: 0px 0px 20px rgba(192, 224, 226, 0.5);
  width: 327px;
  padding: 17px;

  > h1 {
    font: var(--B18);
    margin-bottom: 13px;
  }

  > p {
    font: var(--M14);
  }

  > div {
    display: flex;
    align-items: center;
    margin-bottom: 11px;

    > h2 {
      width: 70px;
      font: var(--M15);
      color: #506c6d;
    }

    > h3 {
      font: var(--M15);
      color: #618687;
    }
  }

  > button {
    margin-top: 13px;
    background-color: #69b0b5;
    width: 100%;
    height: 47px;
    border: none;

    font: var(--M18);
    color: #fff;
  }
`;
