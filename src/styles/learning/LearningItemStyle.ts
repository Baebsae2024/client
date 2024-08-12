import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0px 0px 20px rgba(192, 224, 226, 0.5);
  width: 400px;
  height: 549px;
  border-radius: 30px;
  cursor: pointer;

  > img {
    width: 400px;
    height: 400px;
    border-radius: 30px 30px 0 0;
    background-color: #d9d9d9;
  }

  > h2 {
    padding: 0 20px;
    font: var(--E30);
    color: #304748;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
