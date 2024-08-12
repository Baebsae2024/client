import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1308px;
  height: 180px;
  padding: 43px 51px;
  background-color: #fff;
  border-radius: 50px;
`;

export const LeftWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  > h1 {
    font: var(--E30);
    color: #304748;
  }

  > h2 {
    font: var(--M25);
    color: #304748;
  }
`;

export const RightWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    font: var(--E25);
    color: #69b0b5;
  }
`;
