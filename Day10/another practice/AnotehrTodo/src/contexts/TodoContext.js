import {createContext, useContext} from 'react';

//making context
export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "msg",
            completed:false,
        }
    ]
})

//exporting context
export const useTodo = () => {
    return useContext(TodoContext);
}

//export provider 
export const TodoProvider = TodoContext.Provider;