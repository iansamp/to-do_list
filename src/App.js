import { CiSquareRemove } from "react-icons/ci";
import { useState } from 'react';
import { Box, H2, Header } from './components/styles/styled';

export default function App() {

  const [task, setTask] = useState("")
  const [list, setList] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
    if (!task) return alert("Preencha uma tarefa")
    const newTask = {
      id: Math.random(),
      task: task,
      checked: false,
    }

    setList([...list, newTask]);
    setTask('');
  };

  const removeTask = (id) => {
    const newList = list.filter(task => task.id !== id);
    setList(newList);
  };

  const toggleChecked = (id, checked) => {
    console.log(id, checked)
    const index = list.findIndex(task => task.id === id);
    const newList = list
    newList[index].checked = !checked;
    setList([...newList]);
  };

  return (
    <Header>
      <main className="content">
        <section>
          <div>
            <h1>Tarefas do dia</h1>
            <p className="descption">Anote suas tarefas para não esquecer!</p>
          </div>

          <div className='form'>
            <form>
              <div className='formControl'>
                <label htmlFor='title'>Qual a sua tarefa?</label>
                <input
                value={task} 
                type='text' 
                name='title' 
                placeholder='Digite aqui...'
                onChange={(e) => setTask(e.target.value)}
                />
                <input onClick={addTask} className='send' type='submit' value="Criar tarefa"/>
              </div>
            </form>
          </div>

          <div>
            {list.map((task) => (
              <Box>
              <H2 checked={task.checked}>{task.task}</H2>
              <input
              id='check' 
              key={task.id} 
              type='checkbox'
              onClick={() => toggleChecked(task.id, task.checked)}
              />
              <label>Concluído!</label><br/><br/>
              <button onClick={() => removeTask(task.id)}><CiSquareRemove/></button>
              </Box>
            ))}
          </div>
        </section>
      </main>
    </Header>
  );
}


