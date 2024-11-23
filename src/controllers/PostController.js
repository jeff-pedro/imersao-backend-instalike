import { atualizaPosts, excluiPosts, getTodosPosts } from "../models/postsModel.js";
import { criaPost } from "../models/postsModel.js";

export async function listarPosts(req, res) {
    // Chama a função getTodosPosts para obter os posts.
    const posts = await getTodosPosts();
    // Envia uma resposta HTTP com status 200 (OK) e os posts no formato JSON.
    res.status(200).json(posts);
}

export async function criarPosts(req, res) {
    try {
        const post = await criaPost(req.body);
        res.status(201).json(post);
    } catch (error) {
        res.status(422).json({ message: error.message });
    }

}

export async function atualizarPosts(req, res) {
    const { id } = req.params;
    const novosDados = req.body;

    try {
        await atualizaPosts(id, novosDados);
        res.status(200).json({ message: "Post atualizado com sucesso!" });
    } catch (error) {
        res.status(422).json({ message: error.message });
    }
}

export async function excluirPosts(req, res) {
    const { id } = req.params;
    await excluiPosts(id);
    res.status(200).json({ message: "Post excluído com sucesso!" });    
}
