import express from "express";
import multer from "multer";
import cors from "cors";
import { atualizarNovoPost, listarPosts, postarNovoPost, uploadImagem } from "../controllers/PostController.js";

const corsOptions = {
    origin: "https://instabytes.onrender.com/",
    optionsSuccessStatus: 200 
}

// Obs: configuração necessária em servidores Windows
const storage = multer.diskStorage({
  // Define o diretório para armazenamento das imagens enviadas.
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Altera para o diretório desejado se necessário.
  },
  // Define o nome do arquivo armazenado.
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Mantém o nome original do arquivo.
  },
});

// Configura o middleware multer para upload de imagens.
const uploads = multer({ dest: "./uploads", storage }); // Ajustar o diretório se necessário.

// Função que define as rotas da API.
const routes = (app) => {
  // Habilita o parser JSON para interpretar requisições com corpo no formato JSON.
  app.use(express.json());
  app.use(cors(corsOptions));

  // Rota GET para listar todos os posts. (Função definida em PostController.js)
  app.get("/posts", listarPosts);

  // Rota POST para criar um novo post. (Função definida em PostController.js)
  app.post("/posts", postarNovoPost);

  // Rota POST para upload de imagem.
  // O middleware 'uploads.single("imagem")' configura o upload de um único arquivo chamado 'imagem'.
  app.post("/upload", uploads.single("imagem"), uploadImagem); // (Função definida em PostController.js)
  
  app.put("/upload/:id", atualizarNovoPost);
};

export default routes;
