import { consult } from "../database/conexao"

export default new class UsersRepositories {
    create(body: string) {
        const sql = "INSERT INTO users SET ?"
        return consult(sql, "Não foi possível cadastrar!", body)
    }
    findAll() {
        const sql = "SELECT * FROM users"
        return consult(sql, "Não possível localizar nenhum produto")
    }
    findByEmail(userEmail: string) {
        const sql = "SELECT * FROM users WHERE email=?"
        return consult(sql, "Não possível localizar nenhum produto", userEmail)
    }
    update(id: string, password: string) {
        const sql = "UPDATE users SET password = ? WHERE idUser = ?";
        return consult(sql, "Não foi possível atualizar a senha", [password, id]);
    }
    findById(id: string) {
        const sql = "SELECT * FROM users WHERE idUser = ?";
        return consult(sql, "Usuário não encontrado", [id]);
    }
}