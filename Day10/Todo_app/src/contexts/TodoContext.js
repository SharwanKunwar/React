
import {createContext, useContext} from 'react';

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo: "todo msg",
            completed: false
        }
    ],
    addTodo: (todo)=>{},
    updateTodo: (id, todo)=>{},
    deleteTodo: (id)=>{},
    toggleComplete: (id)=>{}
})

//return  context 
export const useTodo = () =>{
    return useContext(TodoContext);
}

//return provider
export const TodoProvider = TodoContext.Provider

