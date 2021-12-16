import Lista from "./list";

function ModelList({listas}) {
    let tarefaJsx = <div>Nenhum tarefa encontrado.</div>

    if (listas.length > 0) {
        tarefaJsx = listas.map(a=> <Lista list={a} />)
    }
    return (
        <div>
            {tarefaJsx}
        </div>
    );
}

export default ModelList;