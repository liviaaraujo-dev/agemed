import styled from 'styled-components';

const fontSize = new Map([
  ["large", '64px'],
  ["medium", '48px'],
  ["medium-2", '36px'],
  ["small", '16px'],
])

export const Container = styled.div`
  padding: 10px;
`;

export const StyledText = styled.p`
  color: white;
  font-size: ${(props) => (fontSize.get(props.size) ? fontSize.get(props.size) : '16px')};
`;

