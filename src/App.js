import styles from './App.module.css';
import { CiSquareRemove } from "react-icons/ci";
import { useState, useEffect } from 'react';


export default function App() {

  return (
    <header className={styles.header}>
      <main className={styles.content}>
        <section>
          <div>
            <h1>Tarefas do dia</h1>
            <p className={styles.descption}>Anote suas tarefas para não esquecer!</p>
          </div>

          <div className={styles.line}>
            <input type='text' placeholder='Escreva sua tarefa aqui'/>
            <button>ADICIONAR</button>
          </div>

          <div className={styles.box}>
            <h2>Estudar inglês</h2>
            <input type='checkbox' className='checkbox-regularC'/>
            <label>Concluído!</label><br/>
            <button><CiSquareRemove className='button'/></button>
          </div>
        </section>
      </main>
    </header>
  );
}


