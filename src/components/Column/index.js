import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';

import { Title, Container, TaskList } from './styles';

import '../Board';
import Task from '../Task';

const Column = ({ column, tasks, index }) => {
  return (
    <Draggable draggableId={column.id} index={index}>
      {provided => (
        <Container
          {...provided.draggableProps}
          ref={provided.innerRef}
          innerRef={provided.innerRef}
        >
          <Title {...provided.dragHandleProps} ref={provided.innerRef} innerRef={provided.innerRef}>
            {column.title}
          </Title>
          <Droppable droppableId={column.id} type="task">
            {(provided, snapshot) => (
              <TaskList
                ref={provided.innerRef}
                innerRef={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
              >
                {tasks.map((task, index) => (
                  <Task key={task.id} task={task} index={index} />
                ))}
                {provided.placeholder}
              </TaskList>
            )}
          </Droppable>
        </Container>
      )}
    </Draggable>
  );
};

export default Column;
