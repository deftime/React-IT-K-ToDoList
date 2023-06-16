import React, {useState} from 'react';
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

  let state1 = useState(task1);
  let state2 = useState(task2);
  let state3 = useState(task3);

  function removeItem(id: number, task: Array<taskList>) {
    let filtered = task.filter( elem => elem.id !== id );
    state1[1](filtered);
    state2[1](filtered);
    state3[1](filtered);
    console.log(filtered);
  }

  return (
    <div className="App">
      <Todolist title={'What to learn'} list={state1[0]} removeItem={removeItem}/>
      <Todolist title={'Games'} list={state2[0]} removeItem={removeItem}/>
      <Todolist title={'Drinks'} list={state3[0]} removeItem={removeItem}/>
    </div>
  );
}

export default App;
