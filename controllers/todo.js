

exports.getTodos = (req, res) => {
    res.status(200).send({
        status: 'success',
        totalRecords: null,
        data: {
            todos: null
        }
    })
}

exports.getTodo = (req, res) => {
    res.status(200).send({
        status: 'success',
        data: {
            todo: null
        }
    })
}

exports.createTodo = (req, res) => {
    res.status(201).send({
        status: 'success',
        data: {
            todo: null
        }
    })
}

exports.updateTodo = (req, res) => {
    res.status(200).send({
        status: 'success',
        data: {
            todo: null
        }
    })
}

exports.deleteTodo = (req, res) => {
    res.status(204).send({
        status: 'success',
        totalRecords: null,
        data: null
    })
}