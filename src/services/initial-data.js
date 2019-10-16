//cards:
const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Estudar react-dnd' },
    'task-2': { id: 'task-2', content: 'Praticar react-dnd' },
    'task-3': { id: 'task-3', content: 'Iniciar projeto smartbot' },
    'task-4': { id: 'task-4', content: 'Testar projeto' }
  },

  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To do',
      taskIds: ['task-3', 'task-4']
    },
    'column-2': {
      id: 'column-2',
      title: 'Done',
      taskIds: ['task-1', 'task-2']
    }
  },

  columnOrder: ['column-1', 'column-2']
};

export default initialData;
