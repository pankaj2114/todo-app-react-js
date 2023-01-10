import React from 'react';
import { useState } from 'react';
import TodoListItem from './TodoListItem';
import './Todo.css';
import { useEffect } from 'react';
//////////////geting local storage/////////////////////
const getLocalItems = () => {
    const localItem = localStorage.getItem("item");
    if (localItem) {
        return JSON.parse(localStorage.getItem("item"))
    }
    else {
        return [];
    }
}

const Todo = () => {
    const [input, setinput] = useState("");
    const [listItem, setlistItem] = useState(getLocalItems());
    const inputItem = (event) => {
        setinput(event.target.value);
    }
    
    // add item function
    const addItem = (events) => {
        setlistItem((oldItem) => {
            if (input.length !== 0) {
                return [...oldItem, input]

            }
            return listItem;
        });
        setinput("");
        events.preventDefault();
    };
    // edit function
    const editItem = (id) => {
        let editItem= listItem.find( arrElement => {
            return arrElement.id===id;
        });      
       console.log(editItem)
       
    }
    // delete function
    const deleteItem = (id) => {
        setlistItem((oldItem) => {
            return oldItem.filter((arrElement, index) => {
                return index !== id;
            });
        });

    }
    ///clear All
    const clearAll=()=>{
        setlistItem([]);
    }

    // seting local storage
    useEffect(() => {
        localStorage.setItem("item", JSON.stringify(listItem))
    }, [listItem]);
    return (
        <>
            <div className='container'>
               
                <div className="centre">
                    <h1>ToDo List</h1>
                    <div className="input-field">
                        <form onSubmit={addItem}>
                            <input type="text" name="" id="" placeholder='Add a Item' onChange={inputItem} value={input} />
                            <button className='add-btn' type='submit'>+</button>
                        </form>
                    </div>
                    <div className="list-item">
                        <ol>
                            {
                                listItem.map((itemval, index) => {
                                    return <TodoListItem
                                        text={itemval}
                                        key={index}
                                        id={index}
                                        onSelect={deleteItem}
                                        onSelects={editItem} />

                                })
                            }
                        </ol>
                    </div>
                
                 
                <button className='clear' id="clearbutton" onClick={clearAll}>Clear 
                    All
                </button> 
                </div>
                </div>
           
              
           
        </>

    )
}

export default Todo
