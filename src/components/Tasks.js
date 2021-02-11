const tasks = [
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
]

const Tasks = () => {
  return (
    <>
      {tasks.map((task) => (
        <h3>{task.text}</h3>
        ))}
    </>
  )
}

export default Tasks
