import styled from 'styled-components';

export const Title = styled.h1`
  padding: 10px;
`;

export const TaskList = styled.div`
  padding: 10px 10px 100px 10px;
  width: 100%;
  background-color: ${props => (props.isDraggingOver ? '#eaf2f7' : 'white')};
  transition: 0.5s ease;
`;

export const Container = styled.div`
  border: 1px solid black;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 50px;
`;
