import { useState } from 'react';

interface Todo {
  id: number;
  task: string;
}

export const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, task: 'Task 1: Initial' },
    { id: 2, task: 'Task 2: Initial' },
  ]);

  const addAtStart = () => {
    const newTodo = { id: Date.now(), task: `New Task ${todos.length + 1}` };
    setTodos([newTodo, ...todos]);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <button 
        onClick={addAtStart}
        style={{ width: '100%', background: '#38bdf8', color: '#0f172a', fontWeight: 'bold' }}
      >
        ADD TO START (Click me!)
      </button>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div>
          <p style={{ fontSize: '0.7rem', color: '#38bdf8', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Unique ID Keys</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            {todos.map((todo) => (
              <div key={todo.id} style={{ 
                background: 'rgba(15, 23, 42, 0.4)', 
                padding: '8px 12px', 
                borderRadius: '6px', 
                borderLeft: '3px solid #22c55e',
                fontSize: '0.85rem'
              }}>
                {todo.task}
              </div>
            ))}
          </div>
        </div>

        <div>
           <p style={{ fontSize: '0.7rem', color: '#ef4444', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Index Keys (Risk)</p>
           <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            {todos.map((todo, index) => (
              <div key={index} style={{ 
                background: 'rgba(15, 23, 42, 0.4)', 
                padding: '8px 12px', 
                borderRadius: '6px', 
                borderLeft: '3px solid #ef4444',
                fontSize: '0.85rem'
              }}>
                {todo.task}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <p style={{ fontSize: '0.7rem', color: '#64748b', fontStyle: 'italic' }}>
        Note: When adding items to the <b>start</b> using index keys, React might incorrectly reuse DOM elements, leading to performance issues or UI bugs in more complex components.
      </p>
    </div>
  );
};
