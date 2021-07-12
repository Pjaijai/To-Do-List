import React , {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { searchTodo } from '../Actions/SearchAction'
import { CommonInput } from '../Style/style'

function Search({search}) {

    useEffect(() => {
        console.log('Search will mount')
        }
      , [])

        const dispatch = useDispatch()

    return (
        <div>
            
            {
                useEffect(() => {
                    console.log('search did mount')
                    }
                  , [])
            }
            
            <CommonInput
            name = 'search'
            value = {search}
            placeholder = 'Search'
            onChange = {e => dispatch(searchTodo(e.target.value))}
            
            />
        </div>
    )
}

export default Search
