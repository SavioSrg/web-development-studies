// node fetch

const { promises } = require('dns')
const http = require('http')

const sports = ['soccer', 'volley', 'bascketball', 'tennis']

const bodyPromise = new promise ((resolve, reject) => {
    let body

    request.on('data', data =>{
        body = JSON.parse(data)
    })
    request.on('end', data => {
        resolve(body)
    })
})

const server = http.createServer(async(request, response) => {
    const {method, statusCode, url } = request


    if (url === '/'){
        response.write('<h2>Hello from node</h2>')
        response.end()
        return
    }

    if (url === '/api/sports'){
        
        if (method === 'GET'){
        response.write(JSON.stringify(sports))
        response.end()
        return}

        if (method === 'POST'){
        const body = await bodyPromise

        const { name } = body

        if (!sports.map(sport => sport.toLowerCase()).includes(name.toLowerCase())){
            sports.push(name.toLowerCase())
        }

        response.write(name.toLowerCase())
        response.end()
        return
        }
    }

    response.statusCode = 404
    response.write('Página não encontrada')
    response.end()
    return
})
server.listen(3000, 'localhost', () => {
    console.log('server running on http://localhost:3000')
})


fetch('http://localhost:3000').then(
response => response.text( )
.then(data => console.log(data))
)

async function makeRequest() {
    const response = await fetch('http://localhost:3000')
    const data = await response.text()

    console.log(data)
}

makeRequest()