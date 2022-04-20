import React, {FC, useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux";
import {iRootReducer} from "../Redux/Rudecer";
import DeleteIcon from '@mui/icons-material/Delete';
import {Box, Button} from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import EditIcon from '@mui/icons-material/Edit';
import './TodoList.css'


const TodoList: FC = () => {
    const dispatch = useDispatch()
    const selector = useSelector((state: iRootReducer) => state.user.user)
    const arrayMoveUpDown = (key: number, clik: string) => {

        const index = selector.findIndex(item => item.id === key)
        let newIndex = index;
        if (clik === "up") {
            newIndex = newIndex - 1
        } else {
            newIndex = newIndex + 1
        }
        let elements = selector.slice(0);
        let element = elements[index];
        elements.splice(index, 1);
        elements.splice(newIndex, 0, element);
        console.log(elements)
        dispatch({type: "SORT_USER", payload: elements})
    }

    console.log(selector)
    return (
        <Box className="todo">
            <Box>
                {
                    selector.map((item, index) =>
                        <Box className="TodoList" key={item.id}>
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
                            <Button onClick={()=>dispatch({type:"EDIT_USER",payload:item})}><EditIcon/></Button>
                        </Box>
                    )}
            </Box>
        </Box>
    )
}

export default TodoList