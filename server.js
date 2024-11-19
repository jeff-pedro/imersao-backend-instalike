import express from "express";

const app = express();

app.get('/api', (req, res) => {
    res.status(200).send("Boas vindas à Imersão!");
});

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

