import React from "react";

export type taskList = {
  id: number,
  title: string,
  isDone: boolean
}

type propsTitle = {
  title?: string,
  list?: Array<taskList>,
  removeItem: Function
}

export function Todolist(props: propsTitle) {
  return (
      <div className="list-item">
        <div className="title">{props.title ?? '[Name of list]' }</div>
        <div className="new-elem">
          <input type="text"/>
          <button>+</button>
        </div>
        <div className="elems">
          {
            props.list?.map((elem, index)=>{
              return (
                <div className="elem">
                  <input type="checkbox" checked={elem.isDone}/>
                  <label htmlFor="">{elem.title}</label>
                  <button onClick={ () => {props.removeItem(elem.id, props.list)} }>X</button>
                </div>
              )
            })
          }
        </div>
        <div className="list-tools">
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>
      </div>
  )
}