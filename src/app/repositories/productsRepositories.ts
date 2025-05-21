import { consult } from "../database/conexao"

export default new class ProductsRepositories {
    create(body: string) {
        const sql = "INSERT INTO products SET ?"
        return consult(sql, "Não foi possível cadastrar!", body)
    }
    findAll() {
        const sql = "SELECT * FROM products"
        return consult(sql, "Não possível localizar nenhum produto")
    }
    findById(id: string) {
        const sql = "SELECT * FROM products WHERE id=?"
        return consult(sql, "Não possível localizar nenhum produto", id)
    }
    update(id: string, body: string) {
        const sql = "UPDATE products SET ? WHERE id=?"
        return consult(sql, "Não possível localizar nenhum produto", [body, id])
    }
    delete(id: string) {
        const sql = "DELETE FROM products WHERE id=?"
        return consult(sql, "Não possível deletar", id)
    }
}