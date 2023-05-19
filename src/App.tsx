import React from 'react';
import './App.css';
import {taskList, Todolist} from "./Components/Todolist";

function App() {

  let task1: Array<taskList> = [
    { id: 1, title: 'CSS', isDone: true },
    { id: 2, title: 'JS', isDone: true },
    { id: 3, title: 'React', isDone: false }
  ]

  let task2: Array<taskList> = [
    { id: 1, title: 'Witcher 3', isDone: true },
    { id: 2, title: 'WoW', isDone: true },
    { id: 3, title: 'Diablo 4', isDone: true }
  ]

  return (
    <div className="App">
      <Todolist title={'What to learn'} list={task1}/>
      <Todolist title={'Games'} list={task2}/>
      <Todolist />
    </div>
  );
}

export default App;
