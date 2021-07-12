import React from "react";
import Form from "./Components/Form";
import List from "./Components/List";
import Search from "./Components/Search";
import { TodoContainer } from "./Style/style";


function App() {


  return (
    <TodoContainer>
     
        <Form />
        <Search />
        <List />
     
    </TodoContainer>
  );
}

export default App;
