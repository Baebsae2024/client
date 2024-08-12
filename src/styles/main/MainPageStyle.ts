import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > hr {
    margin: 101px 0;
    width: 1336px;
    border: 1.5px dashed #588c83;
  }
`;

export const SwipeWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 578px;
  background-color: #fff;
  gap: 456px;
  margin-top: 48px;
  margin-bottom: 120px;
`;

export const LeftWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  > h1 {
    font: var(--E40);
    color: #000000;
    width: 344px;
  }

  > div {
    font: var(--E20);
    color: #fff;
    background-color: #69b0b5;
    width: 171px;
    height: 54px;
    box-shadow: 0px 0px 20px rgba(192, 224, 226, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
  }
`;

export const RightWrap = styled.div`
  width: 568px;
  height: 396px;
  border-radius: 20px;
  background-color: #d9d9d9;
`;

export const CommunityWrap = styled.div`
  display: flex;
  gap: 35px;
`;
