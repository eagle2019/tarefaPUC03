import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import "./list.css";
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";

function Lista({ list }) {
  const history = useHistory();

  const clickHandler = () => {
    history.push(`/tarefa/${list.id}`);
  };

  const deleteHandler = () => {
    console.log ('testeDelete');

  };

  return (
    <div className="list">
      <div className="card">
        <Paper elevation={8} className="text">
          <div className="click" onClick={clickHandler}>
            {list.nome}
          </div>
          <Checkbox/>
        <div>
          <Button variant="contained" color="error" onClick={deleteHandler}>
            Delete
          </Button>
        </div>
        </Paper>
      </div>
    </div>
  );
}

export default Lista;
