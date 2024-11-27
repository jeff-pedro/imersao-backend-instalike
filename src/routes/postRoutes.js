import express from "express";
import { listarPosts, postarNovoPost } from "../controllers/PostController.js";

const routes = (app) => {
    // Permite que servidor interprete requisições com corpo no formato JSON.
    app.use(express.json());
    // Rota para buscar todos os posts.
    app.get('/posts', listarPosts);
    // Rota para criar um post.
    app.post('/posts', postarNovoPost);
}

export default routes;
