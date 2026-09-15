const express = require("express");
const consultas = require("../dados.json");

const app = express();
const porta = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const mostrarConsultas = (_req, res) => {
    res.json(consultas);
};

const novaConsulta = (req, res) => {
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).send("Erro ao receber consulta");
    }

    consultas.push(req.body);
    return res.send("Consulta recebida, em análise");
};

app.get("/", mostrarConsultas);
app.post("/", novaConsulta);

app.listen(porta, () => {
    console.log(`Cliente: http://127.0.0.1:5500/cliente/`);
    console.log(`Servidor: http://127.0.0.1:${porta}`);
});