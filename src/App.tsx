import React, {FC} from "react";
import Form from "./Form/form";
import Header from "./Header/header";
import TodoList from "./TodoList/TodoList";
import {Route, Routes} from "react-router-dom";
import Home from "./Home/home";

const App:FC =() => {
    return(
        <div>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/form' element={<Form/>}/>
                <Route path='/todolist' element={<TodoList/>}/>
            </Routes>
        </div>
    )
}

export default App