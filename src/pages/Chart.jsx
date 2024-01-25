import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
export function Chart() {
  const navigate = useNavigate()
  return (
    <div>
        Charts <br/>
        <Button variant="contained" onClick={()=>navigate(-1)}>Back</Button>
    </div>
  );
}
