const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database');

class Tarefa extends Model{}

Tarefa.init({
    nome: {
        type:DataTypes.STRING
    },
    texto: {
        type:DataTypes.STRING
    }
} , {
    sequelize,
    modelName: 'tarefa'
})

module.exports = Tarefa;