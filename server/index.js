const express = require('express');
const sequelize = require('./database');
const cors = require('cors');
const Tarefa = require('./tarefa');

sequelize.sync().then(() => console.log('db criado'));
const app = express();

app.use(cors())
app.use(express.json());

//tarefa

app.get('/tarefa', async (req, res) => {
    const tarefas = await Tarefa.findAll();
    res.send(tarefas);
})

app.get('/tarefa/:id', async (req, res) => {
    const { id } = req.params
    const tarefa = await Tarefa.findOne({where: {id: id}});
    res.send(tarefa);
})

app.post('/tarefa', async (req, res) => {
    await Tarefa.create(req.body);
    res.send('tarefa criado com sucesso')
})

app.put('/tarefa/:id', async (req, res) => {
    const { id } = req.params
    const tarefa = await Tarefa.findOne({where: { id }});
    tarefa.nome = req.body.nome;
    await tarefa.save();
    res.send('tarefa atualizado com sucesso');
})

app.delete('/tarefa/:id', async (req, res) => {
    const { id } = req.params
    await Tarefa.destroy({ where: { id }});
    res.send('tarefa deletado com sucesso')
})

app.listen(3001, () => {
    console.log('app is running');
})

