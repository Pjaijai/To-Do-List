import React , { useState} from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../Actions/TodoActions';
import { CommonInput , AddButton } from '../Style/style';
import AddBoxIcon from '@material-ui/icons/AddBox';


function Form( {} ) {

    const [todo, setTodo] = useState("");

  
    
const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({id : Math.random() * 1000, todo : todo, completed:false}))
    console.log('dsda')
    setTodo("")
  };

    return (

        <div>
    
        <form onSubmit={onSubmit} >

            <CommonInput
            name = 'todo'
            value = {todo}
            placeholder = 'What u wanna do?'
            onChange = { e => setTodo( e.target.value )}
            />

            <AddButton
            
            type ='submit'

            >
                <AddBoxIcon fontSize='medium'/>
            </AddButton>
            
            
        </form>
        </div>
    )
    
}
export default Form
