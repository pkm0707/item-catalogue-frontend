import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
export function ShirtsKids(){
    const navigate = useNavigate()
    return(
        <div>
            Shirts for Kids <br/>
            <Button variant="contained" onClick={()=>navigate(-1)}>Back</Button>
        </div>
    )
}