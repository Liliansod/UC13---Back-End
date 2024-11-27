import carros2024 from './tabelacarro.js';
import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (requisicao,resposta) => {
    resposta.status(200).send(carros2024)
});

//iniciar servidor na porta 3000:
app.listen(3000, () => console.log("Servidor rodando com sucesso"));
