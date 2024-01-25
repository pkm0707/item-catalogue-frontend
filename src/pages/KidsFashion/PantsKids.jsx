import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
export function PantsKids(){
    const navigate = useNavigate()
    return(
        <div>
            Pants for Kids <br/>
            <Button variant="contained" onClick={()=>navigate(-1)}>Back</Button>
        </div>
    )
}