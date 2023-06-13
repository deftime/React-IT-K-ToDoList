import React from 'react';
import './App.css';
import {taskList, Todolist} from "./Components/Todolist";

function App() {

  let task1: Array<taskList> = [
    { id: 1, title: 'CSS', isDone: true },
    { id: 2, title: 'JS', isDone: true },
    { id: 3, title: 'React', isDone: false },
    { id: 4, title: 'Redux', isDone: false }
  ]

  let task2: Array<taskList> = [
    { id: 1, title: 'Witcher 3', isDone: true },
    { id: 2, title: 'WoW', isDone: true },
    { id: 3, title: 'Diablo 4', isDone: false }
  ]

  let task3: Array<taskList> = [
    { id: 1, title: 'Beer', isDone: true },
    { id: 2, title: 'Whiskey', isDone: false },
    { id: 3, title: 'Vermouth', isDone: false }
  ]

  function removeItem(id: number, task: Array<taskList>) {
    task = task.filter( elem => elem.id !== id );
    console.log(task);
  }

  return (
    <div className="App">
      <Todolist title={'What to learn'} list={task1} removeItem={removeItem}/>
      <Todolist title={'Games'} list={task2} removeItem={removeItem}/>
      <Todolist title={'Drinks'} list={task3} removeItem={removeItem}/>
    </div>
  );
}

export default App;
