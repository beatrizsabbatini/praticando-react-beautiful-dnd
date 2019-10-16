import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import initialData from '../../services/initial-data';
import Column from '../Column';

import { Container } from './styles';

const Board = () => {
  const [data, setData] = useState(initialData);
  const onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const column = data.columns[source.droppableId];
    const newTaskIds = Array.from(column.taskIds);
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId); //primeiro parametro-> O que será removido (nesse caso nada), segundo parametro-> o que será adicionado

    const newColumn = {
      ...column,
      taskIds: newTaskIds
    };

    const newState = {
      ...data,
      columns: {
        ...data.columns,
        [newColumn.id]: newColumn
      }
    };

    setData(newState);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        {data.columnOrder.map(columnId => {
          const column = data.columns[columnId];
          const tasks = data.columns[columnId].taskIds.map(taskId => data.tasks[taskId]);
          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </Container>
    </DragDropContext>
  );
};

export default Board;
