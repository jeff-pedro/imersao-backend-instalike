import { atualizaPosts, getTodosPosts } from "../models/postsModel.js";
import { criaPost } from "../models/postsModel.js";

export async function listarPosts(req, res) {
    // Chama a função getTodosPosts para obter os posts.
    const posts = await getTodosPosts();
    // Envia uma resposta HTTP com status 200 (OK) e os posts no formato JSON.
    res.status(200).json(posts);
}

export async function criarPosts(req, res) {
    const post = await criaPost(req.body);
    res.status(201).json(post);
}

export async function atualizarPosts(req, res) {
    const { id } = req.params;
    const novosDados = req.body;
    await atualizaPosts(id, novosDados);
    res.status(201).json({ message: "Post atualizado com sucesso!" });
}
