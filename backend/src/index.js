// get - buscar, post - criar, put - alterar, delete - deletar
//tipos de parâmetros
/*
query params: enviados na rota (após ?) request.query
route params: identificar recursos (/users/id, exemplo) request.params
request body: Corpo da requisição -> cria ou altera recursos (app.use(express.json()))

*/
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Entidades
 * ONG
 * Caso (Incident)
 * 
 * Funcionalidades
 * Login de ONG
 * Logout de ONG
 * Cadastro de ONG
 * Cadastrar novos casos
 * Deletar casos
 * Listar casos específicos de uma ONG
 * Listar todos os casos
 * Entrar em contato com a ONG
 */

/**
 * migrations - controle de versão de banco de dados.
 */