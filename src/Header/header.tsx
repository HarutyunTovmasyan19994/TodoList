import React, {FC} from 'react'
import {Link} from 'react-router-dom'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './header.css'

 const Header: FC = () => {
    return (
        <Box className="header">
            <Typography variant='h1'>Todo List</Typography>
            <Box className='buttons'>
                <p>
                    <Link to='/' className='link'>Home</Link>
                </p>
                <p>
                    <Link to='/form' className='link'>Form</Link>
                </p>
                <p>
                    <Link to='/todolist' className='link'>TodoList</Link>
                </p>
                <p>
                    <Link to='/slide_img' className='link'>Pictures</Link>
                </p>
            </Box>
        </Box>
    )
}

export default Header
