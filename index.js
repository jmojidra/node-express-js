const express = require("express")

const todoRouter = require('./routes/todo');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Welcome to the express application</h1>')
})

app.use('/api/v1/todos', todoRouter)

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})