import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
export function Allwomensitems(){
    const navigate = useNavigate()
    return(
        <div>
            All womens items <br/>
            <Button variant="contained" onClick={()=>navigate(-1)}>Back</Button>
        </div>
    )
}