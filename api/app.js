import express from 'express'


const server = express()


server.use(express.json())
const produtos = []


server.get("/", (req, res) => {
    return res.send("hello word")
})

server.get("/produtos", (req, res) => {

    return res.json(produtos)
})

server.post("/produtos", (req, res) => {
    produtos.push(req.body)
    return res.status(201).json(produtos)
})

server.get("/produtos/:id", (req, res) => {
    const id = Number(req.params.id)
    const index = produtos.find(item => item.id === id)
    return res.status(200).json(index)

})

server.put("/produtos/:id", (req, res) => {
    const id = Number(req.params.id)
    const index = produtos.findIndex(item => item.id === id)


    produtos[index].nome = req.body.nome
    produtos[index].price = req.body.price



    return res.status(200).json(produtos)




})

server.delete("/produtos/:id", (req, res) => {
    const id = Number(req.params.id)
    const index = produtos.findIndex(item => item.id === id)

    produtos.splice(index, 1)


    return res.status(200).json("deletado com sucesso")

})


server.listen(3000)