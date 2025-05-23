import { consult } from "../database/conexao"

export default new class ArticleRepositories {
    create(body: string) {
        const sql = "INSERT INTO articles SET ?"
        return consult(sql, "Não foi possível cadastrar!", body)
    }
    findAll() {
        const sql = "SELECT * FROM articles"
        return consult(sql, "Não possível localizar nenhum produto")
    }
    findArticle(title: string) {
        const sql = "SELECT * FROM articles WHERE title=?"
        return consult(sql, "Não possível localizar nenhum produto", title)
    }
    update(id: number, body: any) {
        const sql = "UPDATE articles SET ? WHERE idArticles = ?";
        return consult(sql, "Não possível localizar nenhum produto", [body, id]);
    }
    delete(id: string) {
        const sql = "DELETE FROM articles WHERE idArticles=?"
        return consult(sql, "Não possível deletar", id)
    }
    findMoreFavorite() {
        const sql = "SELECT * FROM articles ORDER BY qntFavorite DESC"
        return consult(sql, "Não possível localizar nenhum produto")
    }
}