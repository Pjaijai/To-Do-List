import { combineReducers } from 'redux'
import { SearchReducer } from './Reducers/SearchReducer'
import { Todoreducer } from './Reducers/Todoreducer'



export default combineReducers({
    Todo : Todoreducer,
    Search : SearchReducer
})