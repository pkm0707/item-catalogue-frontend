import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
export function AccessoriesWomen(){
    const navigate = useNavigate()
    return(
        <div>
            Accessories for Women <br/>
            <Button variant="contained" onClick={()=>navigate(-1)}>Back</Button>
        </div>
    )
}