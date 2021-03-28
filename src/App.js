import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'プレゼンの準備',
      reminder: true,
    },
    {
      id: 2,
      text: '本を読み切る',
      reminder: true,
    },
    {
      id: 3,
      text: 'お弁当を作る',
      reminder: false,
    },
  ]);

  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    console.log(id);
  };

  return (
    <div className='container'>
      <Header title='タスク管理' />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'タスクを追加しましょう'
      )}
    </div>
  );
}

export default App;
