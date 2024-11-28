import fs from "fs";
import { criarPost, getTodosPosts } from "../models/postsModel.js";

export async function listarPosts(req, res) {
    // Chama a função getTodosPosts para obter os posts.
    const posts = await getTodosPosts();
    // Envia uma resposta HTTP com status 200 (OK) e os posts no formato JSON.
    res.status(200).json(posts);
}

export async function postarNovoPost(req, res) {
    const novoPost = req.body;
    try {
        const postCriado = await criarPost(novoPost);
        res.status(200).json(postCriado);
    } catch (error) {
        console.error(error.mesage);
        res.status(500).json({ "Erro": "Falha na requisição" });
    }
}

export async function uploadImagem(req, res) {
    const novoPost = {
        descricao: "",
        imgUrl: req.file.originalname,
        alt: ""
    };

    try {
        const postCriado = await criarPost(novoPost);
        const imageAtualizada = `uploads/${postCriado.insertedId}.png`;
        fs.renameSync(`uploads/${req.file.originalname}`, imageAtualizada);
        res.status(200).json(postCriado);
    } catch (error) {
        console.error(error.mesage);
        res.status(500).json({ "Erro": "Falha na requisição" });
    }
}

