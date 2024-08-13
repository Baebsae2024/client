import { isMobileOrTablet } from '@/hooks/Media';
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
    margin-bottom: 20px;
  }
`;

export const SelectedNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;

  > span {
    font: var(--M28);
    color: #000;
    margin-top: 7px;
  }
`;

export const MenuText = styled.h3<{ selected: boolean }>`
  font: var(--M28);
  color: ${({ selected }) => (selected ? '#619092' : '#000')};
  cursor: pointer;
  margin: 0 14px;
`;

export const TextBox = styled.div`
  margin-top: 55px;
  border: 3px solid #c0e0e2;
  width: 1012px;
  box-shadow: 0px 0px 20px rgba(192, 224, 226, 0.5);
  padding: 42px 42px 40px 42px;

  ${isMobileOrTablet} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 600px;
    padding: 42px 32px 40px 32px;

    > svg {
      display: none;
    }
  }

  > h2 {
    text-align: center;
    font: var(--M32-600);
    color: #000;
    margin-bottom: 30px;

    ${isMobileOrTablet} {
      margin-bottom: 10px;
    }
  }

  > p {
    font: var(--M26-50);
    padding: 32px 0;
    color: #000;
    white-space: pre-line;
  }

  > img {
    display: block;
    margin: auto;
    width: 100%;
  }
`;
