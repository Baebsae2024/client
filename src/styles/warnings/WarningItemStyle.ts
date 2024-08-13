import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 327px;
  height: 450px;
  padding: 20px;
  border: 3px solid #c0e0e2;
  box-shadow: 0px 0px 20px rgba(192, 224, 226, 0.5);

  > h1 {
    margin-top: 8px;
    font: var(--B25-40);
    color: #000;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  }

  > span {
    margin-top: 13px;
    font: var(--M15);
    color: #618687;
  }

  > img {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 287px;
    background-color: #d9d9d9;
  }
`;
