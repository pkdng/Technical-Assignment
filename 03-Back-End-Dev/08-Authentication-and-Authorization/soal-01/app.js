const express = require('express')
const sessions = require('express-session')
const cookieParser = require('cookie-parser')
const { redirect } = require('express/lib/response')

const app = express()
const port = 3000

app.use(sessions({
    secret : "bhdbwaoPIn9cfwbuwedo12Jjhuwam",
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}))

app.use(express.json())
app.use('/login', express.static('views'))
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())


const myusername = 'user1'
const mypassword = 'mypassword'

var session;

app.get('/', (req, res) => {
    session = req.session

    if(session.userID) {
        const message = `
            <h1>Hello, ${session.userID}</h1>
            <a href="/logout"><button>Logout</button></a>
        `
        res.send(message)
    }else {
        res.redirect('/login')
    }
})

app.post('/user', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    
    session = req.session

    if(session.userID === username) {
        res.redirect('/')
    }else if (username === myusername && password === mypassword) {
        session.userID = username;

        const message = `
            <h1>Login Success</h1>
        `
        res.send(message)
        // res.redirect('/')
    }else{
        const message = `
            <h1>Unauthenticated User</h1>
            <a href="/login"><button>Login</button></a>
        `
        res.send(message)
    }
})

app.get('/logout', (req, res) => {
    session = req.session
    
    session.destroy();
    const message = `
        <h1>Logout Success</h1>
        <a href="/login"><button>Login</button></a>
    `;
    res.send(message)
})

app.listen(port, () => {
    console.log("App is running on port", port)
})
