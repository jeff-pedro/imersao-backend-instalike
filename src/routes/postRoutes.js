import express from "express";
import { listarPosts } from "../controllers/PostController.js";
import { criarPosts } from "../controllers/PostController.js";

const routes = (app) => {
    // Permite que servidor interprete requisições com corpo no formato JSON.
    app.use(express.json());
    // Rota GET para buscar todos os posts.
    app.get("/posts", listarPosts);
    // Rota POSTS para criar novos posts.
    app.post("/posts", criarPosts);
}

export default routes;
