import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 800px;
  padding: 40px;
  transition: all 0.3s ease-in-out;

  > h1 {
    text-align: center;
    font: var(--B28);
    color: #000;
  }

  > p {
    font: var(--M23);
    color: #000;
    margin-top: 24px;
    margin-bottom: 24px;
  }

  > span {
    font: var(--M22-22);
    color: #619092;
    margin-bottom: 24px;
  }
`;
