import styles from './App.module.css';
import { CiSquareRemove } from "react-icons/ci";
import { useState } from 'react';


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
  }

  const removeTask = (id) => {
    const newList = list.filter(task => task.id !== id);
    setList(newList);
  }

  return (
    <header className={styles.header}>
      <main className={styles.content}>
        <section>
          <div>
            <h1>Tarefas do dia</h1>
            <p className={styles.descption}>Anote suas tarefas para não esquecer!</p>
          </div>

          <div className={styles.form}>
            <form>
              <div className={styles.formControl}>
                <label htmlFor='title'>Qual a sua tarefa?</label>
                <input
                value={task} 
                type='text' 
                name='title' 
                placeholder='Digite aqui...'
                onChange={(e) => setTask(e.target.value)}
                />
                <input onClick={addTask} className={styles.send} type='submit' value="Criar tarefa"/>
              </div>
            </form>
          </div>

          <div>
            {list.map((task) => (
              <div className={styles.box}>
              <h2 id='task' className={styles.actvive}>{task.task}</h2>
              <input
              id='check' 
              key={task.id} 
              type='checkbox' 
              className='checkbox-regularC'
              />
              <label>Concluído!</label><br/><br/>
              <button onClick={() => removeTask(task.id)}><CiSquareRemove/></button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </header>
  );
}


