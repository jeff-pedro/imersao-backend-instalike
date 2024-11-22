import express from "express";
import postRoutes from "./src/routes/postRoutes.js";

const app = express();
postRoutes(app);

// Inicia o servidor na porta 3000 e exibe uma mensagem no console
app.listen(3000, () => {
  console.log("Servidor escutando...");
});
