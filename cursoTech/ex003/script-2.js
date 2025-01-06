//Estudo de HTTP

const http = require('http')


const server = http.createServer((request, response) => {
    const {method, statusCode, url } = request
    const sports = ['soccer', 'volley', 'bascketball', 'tennis']

    if (url === '/'){
        response.write('<h2>Hello from node</h2>')
        response.end()
        return
    }

    if (url === '/api/sports'){
        response.write(JSON.stringify(sports))
        response.end()
        return
    }

    response.statusCode = 404
    response.write('Página não encontrada')
    response.end()
    return
})
server.listen(3000, 'localhost', () => {
    console.log('server running on http://localhost:3000')
})