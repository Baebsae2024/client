import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 520px;
  padding: 42px 32px 31px;
  transition: all 0.3s ease-in-out;
  text-align: center;

  > h1 {
    transition: all 0.3s ease-in-out;
    font: var(--E30);
    color: #000000;
  }

  > p {
    transition: all 0.3s ease-in-out;
    font: var(--M20);
    color: #000000;
    margin-top: 24px;
    margin-bottom: 30px;
  }
`;
