import conectarAoBanco2 from "../config/dbConfig2.js";
import { ObjectId } from "mongodb";

// Conecta ao banco de dados utilizando a string de conexão fornecida como variável de ambiente.
// A função conectarAoBanco retorna uma promessa que é resolvida com a conexão ao banco.
const conexao = await conectarAoBanco2(process.env.STRING_CONEXAO);
const db = conexao.db("instabytes"); // Obtém o banco de dados "instabytes" da conexão.
const colecao = db.collection("posts"); // Obtém a coleção "posts" do banco de dados.

// Função assíncrona que busca todos os posts da coleção "posts" no banco de dados "instabytes".
// Retorna um array com todos os documentos encontrados.
export async function getTodosPosts() {
    return colecao.find({ descricao: "Gato panqueca" }).toArray(); // Executa a consulta e retorna os resultados como um array.
}

// Função assíncrona que insere um novo post na coleção "posts" no banco de dados "instabytes".
// Retorna o objeto/documento criado.
export async function criaPost(dto) {
  // Cria um objeto com os campos aceitos no schema da coleção "posts".
  const post = {
    descricao: dto.descricao,
    imgUrl: dto.imgUrl,
    alt: dto.alt
  }

  return colecao.insertOne(post); // Executa a inserção e retorna o resulta como um objeto.
}

export async function atualizaPosts(id, dto) {
  return colecao.updateOne({ _id:  ObjectId.createFromHexString(id) }, { $set: dto });
}
