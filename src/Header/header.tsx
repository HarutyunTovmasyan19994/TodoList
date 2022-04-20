import React, {FC} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './header.css'

const Header: FC = () => {
    return (
        <Box className="header">
            <Typography variant = 'h1'>Todo List</Typography>
        </Box>
    )
}

export default Header