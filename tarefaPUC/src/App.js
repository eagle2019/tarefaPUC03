import "./App.css";
import * as React from "react";
import Tarefa from "./components/tarefa";
import ModelList from "./components/model-list";
import Detalhes from "./components/Detalhes";
import { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Container from "@mui/material/Container";
import Headers from "./components/Headers";

function App() {
  // const demoData = [
  //   { _id: 'uni0', nome: "Arroz", texto: "teste" },
  //   { _id: 'uni1', nome: "Feijão", texto: "teste" },
  // ];

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [listas, setListas] = useState([]);

  const cadastrarNome = async (novoNome) => {
    // setListas([novoNome, ...listas]);
    try {
      await fetch("http://localhost:3001/tarefa", {
        method: "POST",
        body: JSON.stringify(novoNome),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (err) {
      setError(err);
    }
  };

  const fetchTarefaHandler = React.useCallback(async () => {
    setIsLoading(true);
    const response = await fetch("http://localhost:3001/tarefa", {
      method: "GET",
    });
    const data = await response.json();
    setListas(data);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchTarefaHandler();
  }, [fetchTarefaHandler]);

  return (
    <Container>
      <Headers />
      <hr></hr>
      {!isLoading && !error && (
        <Switch>
          <Route path="/" exact>
            <div className="media">
              <Tarefa id={listas.length} onTarefaTexto={cadastrarNome} />
            </div>
            <hr></hr>
            <div className="bottom">
              <ModelList listas={listas} />
            </div>
          </Route>
          <Route path="/tarefa/:id">
            <Detalhes listas={listas} />
          </Route>
          <Route path="*">
            <h1> Page not found. </h1>
            <Redirect to="/" />
          </Route>
        </Switch>
      )}
      {isLoading && <p>Loading...</p>}
      {!isLoading && error && <p>{error.message}</p>}
    </Container>
  );
}

export default App;
