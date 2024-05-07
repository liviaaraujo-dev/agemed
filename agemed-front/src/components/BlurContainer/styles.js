import styled from 'styled-components';


export const Container = styled.div`
  height: 100%;
  width: 100%;

  position: relative;
  z-index: 1;
`;

export const BlurContainer = styled.div`
  position: absolute;
  background-color: #00000020;
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  z-index: 1;
  height: 100%;
  width: 100%;
  border-radius: 14px;
`;

export const BodyContainer = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  width: 100%
`;