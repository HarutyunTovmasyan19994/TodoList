import React, {FC, useState, ChangeEvent, useEffect} from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import {useDispatch, useSelector} from "react-redux";
import RefreshIcon from '@mui/icons-material/Refresh';
import {iRootReducer} from "../Redux/Rudecer";
import UpgradeIcon from '@mui/icons-material/Upgrade';
import './form.css'

export interface IUserVal {
    name: string,
    email: string,
    id?: number,
    status: string
    NameEmail?: string
}


const Form: FC = () => {
    const [todo, setTodo] = useState<any>({name: '', email: ""})
    const dispatch = useDispatch()
    const selector = useSelector((state: iRootReducer) => state.user.user)
    const NameEmail = useSelector((title: iRootReducer) => title.user.EditTable)
    useEffect(() => {
        setTodo(NameEmail)
    }, [NameEmail])
    const textChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setTodo({...todo, [name]: value})
    }
    const status = "green"
    const DispatchFunction = () => {
        let reg1 = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        if (reg1.test(todo.email) && todo.name !== "") {
            if (todo.id) {
                const editTodo = selector.map(item => {
                    if (item.id === todo.id) {
                        return todo
                    }
                    return item
                })
                dispatch({type: "SYNC_TODOS", payload: editTodo})
            } else {
                dispatch({type: "ADD_TODO", payload: {...todo, id: new Date().getTime(), status}})
            }
        } else if (todo.name === "") {
            alert("Name Error")
        } else if (todo.email) {
            alert("Email Error")
        }
        setTodo({name: "", email: ""})
    }
    const filterTodoList = (event: ChangeEvent<HTMLSelectElement>) => {
        const bColor = event.target.value
        dispatch({type: "SEND_COLOR", payload: bColor})
    }
    return (
        <>
            <Box className='form'>
                <form>
                    <TextField id="standard-basic" label="Name" variant="standard" onChange={textChange} type="text"
                               name='name'
                               value={todo.name}/>
                    <TextField id="standard-basic" label="Email" variant="standard" onChange={textChange}
                               type="email"
                               name="email" value={todo.email}/>
                    <Button variant="contained" disabled={selector.length >= 5}
                            onClick={DispatchFunction}>
                        {todo.id ? <UpgradeIcon/> : <SendIcon/>}</Button>
                    <Button variant="outlined" color="error"
                            onClick={() => dispatch({type: "DEFAULT_REDUX"})}><RefreshIcon/></Button>
                    <select onChange={(event) => filterTodoList(event)}>
                        <option value="all">---</option>
                        <option value="green">Green</option>
                        <option value="red">Red</option>
                        <option value="yellow">Yellow</option>
                    </select>
                </form>
            </Box>
        </>
    )
}

export default Form