import React, {FC} from "react";
import Form from "./Form/form";
import Header from "./Header/header";
import TodoList from "./TodoList/TodoList";

const App:FC =() => {
    return(
        <div>
            <Header/>
            <Form/>
            <TodoList/>
        </div>
    )
}

export default App