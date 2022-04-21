import React, {ChangeEvent, FC} from 'react'
import {useSelector, useDispatch} from "react-redux";
import {iRootReducer} from "../Redux/Rudecer";
import DeleteIcon from '@mui/icons-material/Delete';
import {Box, Button} from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import './TodoList.css'


const TodoList: FC = () => {
    const dispatch = useDispatch()
    const selector = useSelector((state: iRootReducer) => state.user.user)
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
    return (
        <Box className="todo">
            <Box>
                {
                    selector.map((item, index) => item &&
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
                    )}
            </Box>
        </Box>
    )
}

export default TodoList