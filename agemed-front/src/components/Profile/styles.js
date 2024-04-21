import styled from 'styled-components';
import Text from '../Text';
import { BlurContainer } from '../BlurContainer/styles';

export const Container = styled.div`
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px 10px;
  border-radius: 30px;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

export const StyledImg = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 50%;
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledText = styled(Text)`
  padding: 1px;
`;

export const StyledBlurContainer = styled(BlurContainer)`
  position: static;
`;

export const Container1 = styled.div`
  display: flex;
  flex-direction: row;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;
  cursor: pointer;
`;