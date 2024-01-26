import http from 'http'


const rota = {
    "/": "curso de api com node",
    "/produtos": "Area de Produtos",
    "/item": "Area de Itens"


}


const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });

    return res.end(rota[req.url])
})


server.listen(3000, () => {
    console.log("running server")
})