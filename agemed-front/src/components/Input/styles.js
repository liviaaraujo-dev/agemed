import styled from 'styled-components';

const typeFontColor = new Map([
  ["transparent", 'white'],
  ["default", 'white'],
])

const typeBgColor = new Map([
  ["transparent", '#FFFFFF33'],
  ["default", 'black'],
])

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0px;
  width: 100%;
`;

export const Label = styled.span`
  color: white;
  padding-bottom: 2px;
  font-size: 20px;
`;

export const StyledInput = styled.input`
  padding: 16px 5px;
  border-radius: 6px;
  border: none;
  font-size: 20px;
  background: ${(props) => (typeBgColor.get(props.kind) ? typeBgColor.get(props.kind) : '')};;

  ::placeholder { 
    color: ${(props) => (typeFontColor.get(props.kind) ? typeFontColor.get(props.kind) : '')};
    opacity: 1;
  }
`;
