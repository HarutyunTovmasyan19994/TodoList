import React, {ChangeEvent, FC, useState} from 'react'
import {useSelector, useDispatch} from "react-redux";
import {iRootReducer} from "../Redux/Rudecer";
import DeleteIcon from '@mui/icons-material/Delete';
import {Box, Button} from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import TextField from '@mui/material/TextField';
import './TodoList.css'


const TodoList: FC = () => {
    const [number,setNumber] = useState<number>()
    const [add, setAdd] = useState(1)
    const [currentPage, setCurrentPage] = useState(1)
    const [todoPage, setTodoPage] = useState(2)
    const dispatch = useDispatch()
    const selector = useSelector((state: iRootReducer) => state.user.user)
    const bColor = useSelector((state: iRootReducer) => state.user.bColor)
    const choseNumber = (event: ChangeEvent<HTMLInputElement>) => {
        setNumber(Number(event.target.value))

    }
    const arrayMoveUpDown = (key: number, click: string) => {
        const index = selector.findIndex(item => item.id === key)
        let newIndex = index;
        if (click === "up") {
            newIndex -= 1
        } else {
            newIndex += 1
        }
        let elements = selector.slice(0);
        let element = elements[index];
        elements.splice(index, 1);
        elements.splice(newIndex, 0, element);
        dispatch({type: "SORT_USER", payload: elements})
    }
    const doubleTodo = (item: any) => {
        dispatch({type: "ADD_TODO", payload: {...item, id: new Date().getTime()}})
    }
    const changeColor = (event: ChangeEvent<HTMLSelectElement>, item: any) => {
        const changeColor = selector.map(todo => {
            if (todo.id === item.id) {
                todo.status = event.target.value
            }
            return todo;
        })
        dispatch({type: "SYNC_TODOS", payload: changeColor})
    }
    const pagination = []
    const TodoListLength = selector.length
    const pageLast = currentPage * todoPage;
    const pageFirst = pageLast - todoPage;
    const currentPages = selector.slice(pageFirst, pageLast);
    for (let i = 1; i <= Math.ceil(TodoListLength / todoPage); i++) {
        pagination.push(i)
    }
    const sendNumber =()=>{
        setTodoPage(Number(number))
    }
    console.log(number)

    return (
        <Box className="todo">
            <Box>
                {
                    currentPages.filter(items => {
                        if (items.status === bColor) {
                            return items
                        } else if (bColor === 'all') {
                            return items
                        }
                        return items

                    }).map((item, index) => item &&
                        <>
                            <Box className="TodoList" key={item.id} bgcolor={item.status}>
                                <p> Name: {item.name}</p>
                                <p> Email: {item.email}</p>
                                <Button variant="outlined" onClick={() => dispatch({
                                    type: "CUT_TODO",
                                    payload: item.id
                                })}><DeleteIcon/></Button>
                                <Button onClick={() => arrayMoveUpDown(item.id, "up")}
                                        disabled={index === 0}><KeyboardArrowUpIcon/></Button>
                                <Button onClick={() => arrayMoveUpDown(item.id, "down")}
                                        disabled={index === selector.length - 1}><KeyboardArrowDownIcon/></Button>
                                <Button onClick={() => {
                                    dispatch({type: "EDIT_USER", payload: item});
                                }}><EditIcon/></Button>
                                <Button onClick={() => doubleTodo(item)}><AddIcon/></Button>
                                <select onChange={(e) => changeColor(e, item)}>
                                    <option value="green">Green</option>
                                    <option value="red">Red</option>
                                    <option value="yellow">Yellow</option>
                                </select>
                            </Box>
                        </>
                    ).slice(0, add)
                }
            </Box>
            {
                <Button onClick={() => setAdd(prev => prev + 1)}
                        disabled={selector.length === 0 || selector.length === add}><GroupAddIcon/></Button>
            }
            {
                <Box>
                    <ul className="ul">
                        {pagination.map(number =>
                            <li key={number}>
                                <a href="#" onClick={() => setCurrentPage(number)}>{number}</a>
                            </li>
                        )}
                    </ul>
                    <TextField label="Number" type="number" onChange={choseNumber}/>
                    <button type="submit" onClick={()=>sendNumber()}>Click</button>
                </Box>
            }
        </Box>
    )
}

export default TodoList