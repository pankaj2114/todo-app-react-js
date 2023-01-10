import React from 'react'

const TodoListItem = (props) => {
   
  return (  
      <li>{props.text}<span 
      >
      <i className="fa-regular fa-pen-to-square"onClick={()=>{
      props.onSelects(props.id)
      }}></i><i className="fa-solid fa-trash" onClick={()=>{
      props.onSelect(props.id)
      }}></i></span></li>   
      )
}

export default TodoListItem
