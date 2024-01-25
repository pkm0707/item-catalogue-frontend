import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
export function Allmensitems(){
    const navigate = useNavigate()
    return(
        <div>
            All mens items <br/>
            <Button variant="contained" onClick={()=>navigate(-1)}>Back</Button>
        </div>
    )
}