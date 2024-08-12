import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 153px;
  padding-bottom: 277px;
`;

export const ItemWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 52px;
`;
