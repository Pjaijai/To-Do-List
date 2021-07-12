export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const EDIT_TODO = 'EDITE_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'



export function addTodo(todo){
    return {
        type : ADD_TODO,
        payload : todo, 
    }
}



export function deleteTodo(todoId){
    return {
        type : DELETE_TODO,
        payload : todoId, 
    }
}


export function editTodo(todo){
    return {
        type : EDIT_TODO,
        payload : todo
    }
}



export function completeTodo(todo){
    return {
        type : COMPLETE_TODO,
        payload : todo
    }
}


