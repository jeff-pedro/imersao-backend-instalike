import { MongoClient } from "mongodb";

export default async function conectarAoBanco2(stringConexao) {
    let mongoClient;

    try {
        mongoClient = new MongoClient(stringConexao);
        console.log("Conectando ao cluster do bando de dados...");
        mongoClient.connect();
        console.log("Conectado com o MongoDB Atlas com sucesso!");

        return mongoClient;
    } catch (error) {
        console.log("Erro ao conectar com o banco de dados!", error);
        process.exit();
    }
}
