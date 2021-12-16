import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { useEffect, useState } from "react";
import "./Detalhes.css";

function Detalhes({ listas }) {
  const params = useParams();
  const idTarefa = params._id;
  // const tarefa = listas.find(a => a._id === params.id)
  const [tarefa, setTarefa] = useState({_id: '', nome: '', texto: ''});

  useEffect(() => {
    listas.forEach(element => {
      if(element._id === idTarefa){
        setTarefa(element);
      }
    });
  });

  return (
    <div>
      <div>
        <Button variant="contained">Voltar</Button>
      </div>
      <div className="center">
        <h2>{tarefa.nome}</h2>
        <div>
          <TextareaAutosize
            style={{ width: 490, height: 100 }}
            value={tarefa.texto}
          >
            {tarefa.texto}
          </TextareaAutosize>
        </div>
        <div className="bts">
          <Button 
              variant="contained">
            Completar Tarefa
          </Button>
          <Button variant="contained">Cancelar Tarefa</Button>
        </div>
      </div>
    </div>
  );
}
export default Detalhes;
