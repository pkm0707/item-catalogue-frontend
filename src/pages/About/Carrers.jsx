import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
export function Carrers(){
    const navigate = useNavigate()
    return(
        <div>
            careers <br/>
            <Button variant="contained" onClick={()=>navigate(-1)}>Back</Button>
        </div>
    )
}