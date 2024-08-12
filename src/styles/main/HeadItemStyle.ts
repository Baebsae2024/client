import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  margin-bottom: 70px;
  text-align: center;

  > h1 {
    font: var(--E40);
    color: #000000;
  }

  > p {
    font: var(--M30);
    color: #253536;
  }
`;
