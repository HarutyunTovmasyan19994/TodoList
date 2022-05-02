import React, {FC,useState} from "react"
import Box from "@mui/material/Box/Box"
import './slide_img.css'


const Slide_IMG: FC = () => {
    const [number,setNumber] = useState(0)
    const name =["BMW","Jaguar","Aston-Martin","Nissan"]

    const slider_function = (arg:string) => {
        if(arg === "prev"){
            setNumber(number - 1)
        }else{
            setNumber(number + 1)
        }

    }
    console.log(number)
    return (
        <Box className='box'>
            <Box className="img">
                <p>
                    {name[number]}
                </p>
                <button className="prev" onClick={()=>slider_function("prev")}>PREVIOUS</button>
                <button className="next" onClick={()=>slider_function("next")}>NEXT</button>
            </Box>
        </Box>
    )
}

export default Slide_IMG