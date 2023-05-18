import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Todolist />
      <Todolist />
      <Todolist />
    </div>
  );
}

function Todolist() {
  return (
      <div className="list-item">
        <div className="title">What to learn</div>
        <div className="new-elem">
          <input type="text"/>
          <button>+</button>
        </div>
        <div className="elems">
          <div className="elem"><input type="checkbox" checked={true}/><label htmlFor="">HTML&CSS</label></div>
          <div className="elem"><input type="checkbox" checked={true}/><label htmlFor="">JS</label></div>
          <div className="elem"><input type="checkbox" checked={false}/><label htmlFor="">React</label></div>
        </div>
        <div className="list-tools">
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>
      </div>
  )
}

export default App;
