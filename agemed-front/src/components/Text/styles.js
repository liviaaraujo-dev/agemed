import styled from 'styled-components';

const fontSize = new Map([
  ["large", '64px'],
  ["medium", '48px'],
  ["medium-2", '36px'],
  ["small-1", '20px'],
  ["small", '16px'],
  ["small-2", '14px'],
])

const fontWeight = new Map([
  ["bold", '700'],
  ["semi-bold", '600'],
  ["medium", '500'],
  ["regular", '400'],
  ["tiny", '300'],
])

export const Container = styled.div`
  padding: 10px;
`;

export const StyledText = styled.p`
  color: white;
  font-size: ${(props) => (fontSize.get(props.size) ? fontSize.get(props.size) : '16px')};
  font-weight: ${(props) => (fontWeight.get(props.weight) ? fontWeight.get(props.weight) : '400')};
`;

