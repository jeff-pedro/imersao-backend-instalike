import fs from "fs";
import { atualizarPost, criarPost, getTodosPosts } from "../models/postsModel.js";

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

export async function atualizarNovoPost(req, res) {
    const { id } = req.params;
    const urlImagem = `http://localhost:3000/${id}.png`;
    const postAtualizado = {
        imgUrl: urlImagem,
        descricao: req.body.descricao,
        alt: req.body.alt,
    };
    
    try {
        await atualizarPost(id, postAtualizado);
        res.status(200).json({ mensagem: "Post atualizado com sucesso!" });
    } catch(error) {
        console.error(error.message);
        res.status(500).json({ "Erro": "Falha na requisição" });
    }
}

