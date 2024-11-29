import express from "express";
import "dotenv/config";
import routes from "./src/routes/postRoutes.js";

const app = express();
app.use(express.static("uploads"));
routes(app);

// Inicia o servidor na porta 3000 e exibe uma mensagem no console
app.listen(3000, () => {
  console.log("Servidor escutando...");
});
