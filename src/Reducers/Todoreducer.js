import {ADD_TODO, DELETE_TODO, EDIT_TODO , COMPLETE_TODO} from '../Actions/TodoActions'
const todos = [
    {"id":1,"todo":"Tin","completed":true},
    {"id":2,"todo":"Tin","completed":true},
    {"id":3,"todo":"Sub-Ex","completed":false},
    {"id":4,"todo":"Toughjoyfax","completed":false},
    {"id":5,"todo":"Zathin","completed":true},
    {"id":6,"todo":"Gembucket","completed":true},
    {"id":7,"todo":"Ventosanzap","completed":true},
    {"id":8,"todo":"Toughjoyfax","completed":false},
    {"id":9,"todo":"Veribet","completed":false},
    {"id":10,"todo":"Voyatouch","completed":true}
]



export let Todoreducer = (state  = todos, action) => {
    switch (action.type){
        case ADD_TODO:
            let addTodos = [...state , action.payload]; 
            

            return addTodos
        
        case DELETE_TODO:
            let deleteTodos = [...state]; 
            deleteTodos = deleteTodos.filter(todo => todo.id !== action.payload)
            return deleteTodos;

        
        case EDIT_TODO:
            let editTodos = [...state];
            editTodos.find(val => val.id === action.payload.id).todo = action.payload.todo
            return editTodos 
            
        case COMPLETE_TODO:
            let completeTodos = [...state];
            completeTodos.find(val => val.id === action.payload.id).completed = !completeTodos.find(val => val.id === action.payload.id).completed
            return completeTodos 
            

        default:
            return state
        
        }
    
    }
        
    


