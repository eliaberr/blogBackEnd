import mysql from 'mysql';

export const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'blog'
});
export const connectToDatabase = () => {
    return new Promise<void>((resolve, reject) => {
        if (conexao.state === 'disconnected') {
            conexao.connect((err) => {
                if (err) {
                    reject('Erro ao conectar com o banco de dados: ' + err.message);
                } else {
                    resolve();
                }
            });
        } else {
            resolve();
        }
    });
};
export const consult = (sql:string,  errorMessage:string, parameters?:string|string[]) => {
    return new Promise((resolve, reject) => {
        conexao.query(sql, parameters, (error, result) => {
            if (error) return reject(errorMessage)
            const res = JSON.parse(JSON.stringify(result))
            return resolve(res)
        })
    })
}