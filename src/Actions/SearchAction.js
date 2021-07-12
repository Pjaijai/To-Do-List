export const SEARCH_TODO = 'SEARCH_TODO'


export function searchTodo(todo){
    return {
        type : SEARCH_TODO,
        payload : todo, 
    }
}