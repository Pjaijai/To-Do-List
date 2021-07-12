import { SEARCH_TODO } from "../Actions/SearchAction"




export let SearchReducer = ( state = "", action) => {
    switch (action.type){
        case SEARCH_TODO :
            state = action.payload
            
            return state


        default:
            return state
    }


}