import { isMobileOrTablet } from '@/hooks/Media';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 78px;
  padding-bottom: 115px;

  ${isMobileOrTablet} {
    > svg {
      display: none;
    }
  }

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
    margin-bottom: 65px;
  }
`;

export const GridWrap = styled.div`
  display: grid;
  gap: 28px;
  grid-template-columns: repeat(3, 1fr);

  ${isMobileOrTablet} {
    gap: 20px;
    grid-template-columns: repeat(2, 1fr);
  }
`;
