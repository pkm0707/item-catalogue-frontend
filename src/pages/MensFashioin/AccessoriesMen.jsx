import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
export function AccessoriesMen(){
    const navigate = useNavigate()
    return(
        <div>
            Accessories for Men <br/>
            <Button variant="contained" onClick={()=>navigate(-1)}>Back</Button>
        </div>
    )
}