import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
export function Allkidsitems(){
    const navigate = useNavigate()
    return(
        <div>
            All kids items <br/>
            <Button variant="contained" onClick={()=>navigate(-1)}>Back</Button>
        </div>
    )
}