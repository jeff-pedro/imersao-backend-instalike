import conectarAoBanco2 from "../config/dbConfig2.js";
import { ObjectId } from "mongodb";

// Conecta ao banco de dados utilizando a string de conexão fornecida como variável de ambiente.
// A função conectarAoBanco retorna uma promessa que é resolvida com a conexão ao banco.
const conexao = await conectarAoBanco2(process.env.STRING_CONEXAO);
const db = conexao.db("instabytes"); // Obtém o banco de dados "instabytes" da conexão.
const colecao = db.collection("posts"); // Obtém a coleção "posts" do banco de dados.

function validaPost(post) {

  const urlFormat = /http[s]?:\/\/(\w*.\w*.\w*)/
  
  for (const propriedade in post) {
    if (typeof(post[propriedade]) === "number") continue;
    // Faz a sanitização
    // Remove espaços em vazios no começo ou no fim do conjunto de strings
    post[propriedade] = post[propriedade].trim();
    
    if(!post[propriedade]) throw new Error(`O campo ${descrição} não pode ser vazio.`);  
  }

  if(post.imgUrl && post.imgUrl.match(urlFormat) === null) throw new Error("O campo imgUrl não está no formato correto");

  return post  
}

// Função assíncrona que busca todos os posts da coleção "posts" no banco de dados "instabytes".
// Retorna um array com todos os documentos encontrados.
export async function getTodosPosts() {
    return colecao.find({ descricao: "Gato panqueca" }).toArray(); // Executa a consulta e retorna os resultados como um array.
}

// Função assíncrona que insere um novo post na coleção "posts" no banco de dados "instabytes".
// Retorna o objeto/documento criado.
export async function criaPost(dto) {
  const post = validaPost(dto); // Valida se o campos foram preenchidos corretamente.
  return colecao.insertOne(post); // Executa a inserção e retorna o resulta como um objeto.
}

export async function atualizaPosts(id, dto) {
  const post = validaPost(dto);
  return colecao.updateOne({ _id:  ObjectId.createFromHexString(id) }, { $set: post });
}

export async function excluiPosts(id) {
  return colecao.deleteOne({ _id: ObjectId.createFromHexString(id) })
}
