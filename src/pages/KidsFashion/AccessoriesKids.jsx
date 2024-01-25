import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
export function AccessoriesKids(){
    const navigate = useNavigate()
    return(
        <div>
            Accessories for Kids <br/>
            <Button variant="contained" onClick={()=>navigate(-1)}>Back</Button>
        </div>
    )
}