import React, {FC, useState, ChangeEvent, useEffect} from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import {useDispatch, useSelector} from "react-redux";
import './form.css'
import {iRootReducer} from "../Redux/Rudecer";

export interface IUserVal {
    name: string,
    email: string,
    id?:number

}


const Form: FC = () => {
    const [todo, setTodo] = useState<any>({name: '', email: ""})

    const dispatch = useDispatch()
    const selector = useSelector((state: iRootReducer) => state.user.user)
    const NameEmail = useSelector((title:iRootReducer) =>title.EditTable.EditTable)
    useEffect(()=>{
            setTodo(NameEmail)
    },[NameEmail])
    console.log(NameEmail)
    const textChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setTodo({...todo, [name]: value})
    }

    const DispatchFunction = () => {
        let reg1 = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        if(reg1.test(todo.email) && todo.name !== ""){
            dispatch({type: "ADD_TODO", payload: {...todo, id: new Date().getTime()}})
        }else if(todo.name === ""){
            alert("Name Error")
        }
        else if(todo.email){
            alert("Email Error")
        }
        setTodo({name: "", email: ""})
    }

    return (
        <>
            <Box className='form'>
                <form>
                    <TextField id="standard-basic" label="Name" variant="standard" onChange={textChange} name='name'
                               value={todo.name}/>
                    <TextField id="standard-basic" label="Email" variant="standard" onChange={textChange} type="email"
                               name="email" value={todo.email}/>
                    {
                        selector.length < 5 ?
                            <Button variant="contained" onClick={DispatchFunction}><SendIcon/>Send</Button>
                            : <Button disabled><SendIcon/>Send</Button>
                    }
                </form>
            </Box>
        </>
    )
}

export default Form