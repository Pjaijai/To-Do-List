import React , { useState} from 'react'
import {useDispatch} from 'react-redux'
import { completeTodo, deleteTodo, editTodo } from '../Actions/TodoActions'
import { DeleteButton , EditButton , OkButton , ButtonGroup , ItemContainer , ItemInput , ItemButtonContainer ,CheckBox } from '../Style/style'
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import EditIcon from '@material-ui/icons/Edit';
import DoneAllIcon from '@material-ui/icons/DoneAll';


function ListItem({id,  todo , completed}) {

const dispatch = useDispatch()


const [editable , setEditable] = useState(false)
const [edittodo , setEdittodo] = useState(todo)

const handleEdit = () =>{
    dispatch(editTodo({
        id : id, 
        todo : edittodo
    }))
    setEditable(false)
}


    
    return (
        <ItemButtonContainer completed={completed}>

            <ItemContainer> 
                {editable ? 
                    <div>
                        <ItemInput
                        value ={edittodo}
                        onChange = { e => setEdittodo(e.target.value)}
                        /> 
                    </div>
                        
                        : 
                    <div>

                        <h1>{todo}</h1> 
                        
                    </div>
                }
                </ItemContainer>
            
            <ButtonGroup>

                <DeleteButton 
                    onClick = {() => dispatch(deleteTodo(id))}
                >  
                    <DeleteForeverOutlinedIcon fontSize='large'/>
                </DeleteButton>
           
                { editable ?

                    
                    <OkButton
                    onClick = {handleEdit}
                    >
                        <DoneAllIcon fontSize='large'/>
                    </OkButton>
                    
                :
                    <EditButton
                    onClick = {() => {setEditable(!editable)}}
                    >
                        <EditIcon fontSize='large'/>
                    </EditButton>

                    
                }
                <CheckBox 
                    type='checkbox'
                    defaultChecked={completed}
                    onClick = {()=> dispatch(completeTodo({id,completed}))}
                    
                    
                />
                
            </ButtonGroup>
        </ItemButtonContainer>
    )
}

export default ListItem
