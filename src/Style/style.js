import styled , {css}from 'styled-components'


export const TodoContainer = styled.div`
    font-family: "Lucida Console", "Courier New", monospace;
    text-align: center;
`

export const ItemListContainer = styled.div`
    
`
export const ItemButtonContainer = styled.div`
    
    ${({completed}) => (completed ? Completed :  NoCompleted)}
    


`


export const  NoCompleted = css`
    width: 80%;
    height:auto;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
    margin-top: 15px;
    border-radius: 15px;

`    
export const  Completed = css`
    width: 80%;
    height:auto;
    margin-left: auto;
    margin-right: auto;
    opacity: 0.5;
    margin-top: 15px;
    border-radius: 15px;

`

export const ListContainer = styled.div`
    width: 40% ;
    margin-left : auto;
    margin-right : auto;
    justify-content: center;
    padding : 20px;
`

export const ItemContainer = styled.div`
    width: 60% ;
    display: inline-block;
    object-fit:contain;
    margin: 10px;
`
export const ButtonGroup = styled.div`
    width: 30% ;
    display: inline-block;
    

`

export const CommonInput = styled.input`
    height : 30px ;
    margin : 5px ;
    width : 30% ;
    font-size:24px;
    
`

export const ItemInput = styled(CommonInput)`
    width: 80%;
    height: 70px;
    margin: 0px;
    
   
    
`


export const BaseButton = styled.button`
    height : 40px;
    width : 70px;
    margin-left: 10px;
    border-radius: 10px;
    color: white;

`
export const AddButton = styled(BaseButton)`

    background-color :#FFD700;



`

export const DeleteButton = styled(BaseButton)`
    margin-right: 50px;
    margin-left:auto;
    background-color :tomato;

`

export const EditButton = styled(BaseButton)`

    background-color :#556B2F;
    

`

export const OkButton = styled(BaseButton)`

    background-color :#006400;   
    

`
export const CheckBox = styled.input`
    height : 40px;
    width : 70px;
    border-radius: 10px;

`