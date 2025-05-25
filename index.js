import express from "express";

const host = "0.0.0.0";
const port = 3002;
var listaServicos = [];

const app = express();

app.use(express.urlencoded({extended: true}));
