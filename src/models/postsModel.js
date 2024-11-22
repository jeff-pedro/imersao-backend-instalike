import conectarAoBanco from "../config/dbConfig.js";

// Conecta ao banco de dados utilizando a string de conexão fornecida como variável de ambiente.
// A função conectarAoBanco retorna uma promessa que é resolvida com a conexão ao banco.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona que busca todos os posts da coleção "posts" no banco de dados "instabytes".
// Retorna um array com todos os documentos encontrados.
export async function getTodosPosts() {
    const db = conexao.db("instabytes"); // Obtém o banco de dados "instabytes" da conexão.
    const colecao = db.collection("posts"); // Obtém a coleção "posts" do banco de dados.
    return colecao.find().toArray(); // Executa a consulta e retorna os resultados como um array.
  }
