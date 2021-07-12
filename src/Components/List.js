import React from 'react'
import { useSelector } from 'react-redux'
import { ItemListContainer } from '../Style/style.js'
import ListItem from './ListItem.js'

function List({list}) {



  const todos = useSelector(state => state.Todo)
  const search = useSelector(state => state.Search)

    return (
        <ItemListContainer>
            

        {
          todos.filter((item) => {
             if (item.todo.toLowerCase().includes(search.toLowerCase())){
              return item
            } 
            
          }).map((item , key) =>{
            return (
              <ListItem
                key = {item.id}
                id = {item.id}
                todo = {item.todo}
                list= {list}
                completed={item.completed}
              />
            )
          
        })}
        </ItemListContainer>
    )
}

export default List
