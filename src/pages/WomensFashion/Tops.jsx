import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
export function Tops(){
    const navigate = useNavigate()
    return(
        <div>
            Tops <br/>
            <Button variant="contained" onClick={()=>navigate(-1)}>Back</Button>
        </div>
    )
}