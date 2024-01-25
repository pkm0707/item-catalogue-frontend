import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
export function Shirts(){
    const navigate = useNavigate()
    return(
        <div>
            Shirts <br/>
            <Button variant="contained" onClick={()=>navigate(-1)}>Back</Button>
        </div>
    )
}