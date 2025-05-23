import { app } from "./app"
import { conexao } from "./app/database/conexao"

const port = 3006

conexao.connect((error) => {
  if (error) {
    console.log(error)
    console.log("ERRO AO CONECTAR")
  } else {
    app.listen(port, () => {
      console.log(`App de exemplo esta rodando na porta ${port}`)
    })
  }
})