import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
export function Bottoms(){
    const navigate = useNavigate()
    return(
        <div>
            Bottoms <br/>
            <Button variant="contained" onClick={()=>navigate(-1)}>Back</Button>
        </div>
    )
}