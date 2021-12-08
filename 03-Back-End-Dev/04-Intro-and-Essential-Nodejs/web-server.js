const http = require('http')

const server = http.createServer((request, response) => { 
    if(request.url === "/about") {
        response.writeHead(200, {'Content-Type' : 'text/html'})
        response.write('Welcome to about us page')
    }else if(request.url === "/contact") {
        response.writeHead(200, {'Content-Type' : 'text/html'})
        response.write('Welcome to contact us page')
    }else {
        response.writeHead(200, {'Content-Type' : 'text/html'})
        response.write('Hello World!')
    }
    response.end()
 })

 server.listen(3000)