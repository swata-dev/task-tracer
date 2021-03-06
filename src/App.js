import './App.css';
import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'プレゼンの準備',
    },
    {
      id: 2,
      text: 'あの本を読み切る',
    },
    {
      id: 3,
      text: 'お弁当を作る',
    }
  ])

  // delete task
  const deleteTask = (id) => {
    console.log('delete', id)
  }

  return (
    <div className="container">
      <Header title='Task Tracer' />
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
