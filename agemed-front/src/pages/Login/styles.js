import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(assets/images/login.png);
  flex-direction: column;
  z-index: 1;
`;

export const BodyBlurContainer = styled.div`
  position: absolute;
  background-color: #00000020;
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  padding: 100px;
  border-radius: 14px;
  height: 400px;
  width: 800px;
  z-index: 1;
`;

export const BodyContainer = styled.div`
  z-index: 2;
  position: fixed;
  padding: 100px;
  border-radius: 14px;
  height: 400px;
  width: 800px;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DataContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;