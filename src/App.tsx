import React, {FC} from "react";
import Form from "./Form/form";
import Header from "./Header/header";
import TodoList from "./TodoList/TodoList";
import {Route, Routes} from "react-router-dom";
import Home from "./Home/home";
import Slide_IMG from "./Slide_Img/slide_img";

const App:FC =() => {
    return(
        <div>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/form' element={<Form/>}/>
                <Route path='/todolist' element={<TodoList/>}/>
                <Route path='/slide_img' element={<Slide_IMG/>}/>
            </Routes>
        </div>
    )
}

export default App