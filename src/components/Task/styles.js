import styled from 'styled-components';

export const Container = styled.div`
  padding: 5px;
  margin: 10px;
  border: 1px solid ${props => (props.isDragging ? 'black' : 'transparent')};
  border-radius: 5px;
  background-color: ${props => (props.isDragging ? 'white' : 'lightblue')};
`;
