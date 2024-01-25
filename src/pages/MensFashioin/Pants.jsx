import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
export function Pants(){
    const navigate = useNavigate()
    return(
        <div>
            Pants <br/>
            <Button variant="contained" onClick={()=>navigate(-1)}>Back</Button>
        </div>
    )
}