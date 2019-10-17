import styled from 'styled-components';

export const Title = styled.h1`
  padding: 10px;
`;

export const TaskList = styled.div`
  padding: 10px 10px 100px 10px;
  width: 100%;
  min-height: 100px;
  background-color: ${props => (props.isDraggingOver ? '#eaf2f7' : 'inherit')};
  transition: 0.5s ease;
`;

export const Container = styled.div`
  background-color: white;
  border: 1px solid black;
  max-width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-grow: 1;
  margin: 50px;
`;
