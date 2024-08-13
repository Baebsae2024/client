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
    margin-bottom: 65px;
  }
`;

export const ItemWrap = styled.div`
  display: grid;
  gap: 28px;
  grid-template-columns: repeat(3, 1fr);
`;
