import express from 'express';

export const app = express();
app.use(express.json());

const users = [
    {
        id: 1,
        name:"Eliabe",
        email:"email@email.com",
        password:"1234"
    },
    {
        id: 2,
        name:"lais",
        email:"lais@email.com",
        password:"1234"
    },
    {
        id: 2,
        name:"ana",
        email:"ana@email.com",
        password:"1234"
    },
]

function buscarPorId(id: number): number {
    return users.findIndex(user => user.id === id);
}

app.get('/', (req, res) => {
  res.send('Olá, TypeScript com Express!');
});

app.get('/users', (req, res) => {
	res.status(200).send(users)
})

app.post('/register', (req, res) => {
	users.push(req.body)
	res.status(200).send('Usuário criado com Sucesso!!')
})

app.delete("/deleteUser/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = buscarPorId(id);

    if (index !== -1) {
        users.splice(index, 1);
        res.status(200).send("User deletado com sucesso");
    } else {
        res.status(404).send("Usuário não encontrado");
    }
});

app.put('/forgetPassword/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = buscarPorId(id);

    if (index !== -1) {
        users[index].password = req.body.password;
        res.status(200).send("Senha atualizada com sucesso");
    } else {
        res.status(404).send("Usuário não encontrado");
    }
});
